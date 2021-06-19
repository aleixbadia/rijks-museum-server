import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import artObjRouter from "./routes/artObj.routes";
import passportConfig from "./config/passport.config";

dotenv.config();
require('./config/db.config');

// Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_PORT}`, credentials: true }));
app.use(
  session({
    secret: `${process.env.SECRET}`,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport
passportConfig(app)

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/artObj", artObjRouter);

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
