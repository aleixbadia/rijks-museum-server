import { Request, Response, NextFunction } from "express";

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const { user }: any = req;
    if (user) {
      next();
    } else {
      res.send("Sorry, you arent logged in.");
    }
  };

  export default isLoggedIn;