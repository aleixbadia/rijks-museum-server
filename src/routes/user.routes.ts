import express from "express";
import User, { UserDocument } from "../models/User.model";
import mongoose from "mongoose";
import isLoggedIn from "../middlewares/auth";
import {
  UserInterface,
  DBUserInterface,
} from "../interfaces/UserInterface";

const router = express.Router();

router.get("/getAllUsers", isLoggedIn, async (req, res) => {
  await User.find(
    {},
    (err: mongoose.CallbackError, data: DBUserInterface[]) => {
      if (err) throw err;
      const filteredUsers: UserInterface[] = [];
      data.forEach((item: DBUserInterface) => {
        const userInformation = {
          id: item._id,
          username: item.username,
          favArtObj: item.favArtObj,
        };
        filteredUsers.push(userInformation);
      });
      res.send(filteredUsers);
    }
  );
});

router.post("/addToFavs", isLoggedIn, async (req, res, next) => {
  const { artObjId } = req.body;
  const user = req.user as UserDocument;
  await User.findByIdAndUpdate(user._id, {
    $push: { favArtObj: artObjId },
  });
});

router.post("/deleteFromFavs", isLoggedIn, async (req, res, next) => {
  const { artObjId } = req.body;
  const user = req.user as UserDocument;
  await User.findByIdAndUpdate(user._id, {
    $pull: { favArtObj: artObjId },
  });
});

export default router;
