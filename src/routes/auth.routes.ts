import express from "express";
import User from "../models/User.model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import passport from "passport";
import { DBUserInterface } from "../interfaces/UserInterface";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    res.send("improper");
    return;
  }
  User.findOne(
    { username },
    async (err: mongoose.CallbackError, doc: DBUserInterface) => {
      if (err) throw err;
      if (doc) res.send("exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username,
          password: hashedPassword,
        });
        await newUser.save();
        req.login(newUser, (error) => {
          if (error) {
            return res.status(500).json(error);
          }
          return res.status(200).send("success");
        });
      }
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("success");
});

export default router;
