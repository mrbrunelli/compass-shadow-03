import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { env } from "./config/env";
import { recipeRouter } from "./routes/recipe-routes";

const app = express();

app.use(express.json());
app.use(recipeRouter);

mongoose
  .connect(env.DB_URI)
  .then(() => {
    app.listen(env.APP_PORT, () => {
      console.log(`server is running at ::${env.APP_PORT}`);
    });
  })
  .catch((e) => {
    console.log(`failed to connect at mongo instace: ${e.message}`);
  });
