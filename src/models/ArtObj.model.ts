import mongoose from "mongoose";
const Schema = mongoose.Schema;

const artObj = new Schema({
  links: {
    self: String,
    web: String,
  },
  id: String,
  objectNumber: String,
  title: String,
  hasImage: Boolean,
  principalOrFirstMaker: String,
  longTitle: String,
  showImage: Boolean,
  permitDownload: Boolean,
  webImage: {
    guid: String,
    offsetPercentageX: Number,
    offsetPercentageY: Number,
    width: Number,
    height: Number,
    url: String,
  },
  headerImage: {
    guid: String,
    offsetPercentageX: Number,
    offsetPercentageY: Number,
    width: Number,
    height: Number,
    url: String,
  },
  productionPlaces: [String],
  description: String,
});

export default mongoose.model("ArtObj", artObj);
