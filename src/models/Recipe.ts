import mongoose, { Schema } from "mongoose";

export const Recipe = mongoose.model(
  "Recipe",
  new Schema(
    {
      name: String,
      ingredients: Array<String>,
      preparation: String,
      recipeAuthor: {
        name: String,
        email: String,
      },
    },
    {
      timestamps: true,
      collection: "recipe",
    }
  )
);
