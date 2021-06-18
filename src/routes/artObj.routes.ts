import express from "express";
import ArtObj from "../models/ArtObj.model";
import mongoose from "mongoose";
import { DBArtObjInterface } from "../interfaces/ArtObjInterface";

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
    {objectNumber: id},
    (err: mongoose.CallbackError, data: DBArtObjInterface[]) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

export default router;
