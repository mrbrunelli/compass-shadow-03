import { Recipe } from "../models/Recipe";

export class RecipeService {
  async createNewRecipe(dto: any): Promise<void> {
    const recipe = new Recipe(dto);
    await recipe.save();
  }
}
