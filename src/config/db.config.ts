import mongoose from "mongoose";

mongoose.connect(
  `${process.env.MONGODB_URI}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected To Mongo");
  }
);

export default mongoose;
