import express from "express";
import ArtObj from "../models/ArtObj.model";
import mongoose from "mongoose";
import { DBArtObjInterface } from "../interfaces/ArtObjInterface";
import { UserDocument } from "../models/User.model";

const router = express.Router();

router.get("/getAllArtObj", async (req, res) => {
  await ArtObj.find(
    {},
    (err: mongoose.CallbackError, data: DBArtObjInterface[]) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

router.get("/getByObjNum/:id", async (req, res) => {
  const id = req.params.id;
  await ArtObj.findOne(
    { objectNumber: id },
    (err: mongoose.CallbackError, data: DBArtObjInterface[]) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

router.get("/getAllFavs", async (req, res) => {
  const user = req.user as UserDocument;
  if (req.user) {
    ArtObj.find(
      {
        objectNumber: { $in: user.favArtObj },
      },
      (err: mongoose.CallbackError, data: DBArtObjInterface[]) => {
        if (err) throw err;
        console.log(data)
        res.send(data);
      }
    );
  }
});

export default router;
