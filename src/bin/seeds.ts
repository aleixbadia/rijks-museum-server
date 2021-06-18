import dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import ArtObj from "../models/ArtObj.model";
import mongoose from "mongoose";
import { DBArtObjInterface } from "../interfaces/ArtObjInterface";

dotenv.config();

const rijksApi: AxiosInstance = axios.create({
  baseURL: `https://www.rijksmuseum.nl/api/en/collection`,
  withCredentials: false,
});

const seeds = async () => {
  const db = await mongoose.connect(`${process.env.MONGODB_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await db.connection.dropDatabase();

  const allArtObj = await rijksApi.get("?key=1cGiJiKL&ps=16");

  let DBAllArtObj = allArtObj.data.artObjects.map(
    async (artObj:any) => {
      try {
        const artObjDetail = await rijksApi.get(
          `/${artObj.objectNumber}?key=1cGiJiKL`
        );
        artObj.description = artObjDetail.data.artObject.description;
        return artObj;
      } catch (error) {
      }
    }
  );

  const allCreations = await Promise.all(DBAllArtObj);
  const allCreationsfiltered = allCreations.filter((artObj: DBArtObjInterface) => artObj)
  const allCreationsPromises = allCreationsfiltered.map((artObj) => {
    return ArtObj.create(artObj)
  })
  
  const dbArtObj = await Promise.all(allCreationsPromises)
  console.log(dbArtObj)

  await db.connection.close();

};

seeds();

