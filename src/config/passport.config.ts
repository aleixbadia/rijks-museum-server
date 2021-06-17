import { Application } from "express";
import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/User.model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import {
  UserInterface,
  DBUserInterface,
} from "../interfaces/UserInterface";

const LocalStrategy = passportLocal.Strategy;

export default (app: Application) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy((username: string, password: string, done) => {
      User.findOne(
        { username: username },
        (err: mongoose.CallbackError, user: DBUserInterface) => {
          if (err) throw err;
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result: boolean) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        }
      );
    })
  );

  passport.serializeUser((user: DBUserInterface, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id: string, cb) => {
    User.findOne(
      { _id: id },
      (err: mongoose.CallbackError, user: DBUserInterface) => {
        const userInformation: UserInterface = {
          username: user.username,
          favArtObj: user.favArtObj,
          id: user._id,
        };
        cb(err, userInformation);
      }
    );
  });
};
