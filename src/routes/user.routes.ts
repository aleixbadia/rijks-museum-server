import express from "express";
import User, { UserDocument } from "../models/User.model";
import isLoggedIn from "../middlewares/auth";

const router = express.Router();

router.post("/addToFavs", isLoggedIn, async (req, res, next) => {
  const { artObjNum } = req.body;
  const user = req.user as UserDocument;
  if(!user.favArtObj.includes(artObjNum)){
    await User.findByIdAndUpdate(user.id, {
      $push: { favArtObj: artObjNum },
    });
    res.send("success");
  }
  res.send("Already in favourites");

});

router.post("/deleteFromFavs", isLoggedIn, async (req, res, next) => {
  const { artObjNum } = req.body;
  const user = req.user as UserDocument;
  await User.findByIdAndUpdate(user.id, {
    $pull: { favArtObj: artObjNum },
  });
  res.send("success");
});

export default router;
