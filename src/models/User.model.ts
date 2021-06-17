import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export type UserDocument = mongoose.Document & {
  username: string;
  password: string;
  favArtObj: [];
};

const user = new Schema<UserDocument>({
  username: {
    type: String,
    unique: true
  },
  password: String,
  favArtObj: [{ type: ObjectId, ref: "ArtObj" }]
});

export default mongoose.model<UserDocument>("User", user);