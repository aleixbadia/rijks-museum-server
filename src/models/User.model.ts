import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export type UserDocument = mongoose.Document & {
  username: string;
  password: string;
  favArtObj: [string];
};

const user = new Schema<UserDocument>({
  username: {
    type: String,
    unique: true
  },
  password: String,
  favArtObj: [String]
});

export default mongoose.model<UserDocument>("User", user);