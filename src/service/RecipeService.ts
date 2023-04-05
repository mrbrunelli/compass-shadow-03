import { Recipe } from "../model/Recipe";

export class RecipeService {
  async createNewRecipe(dto: any): Promise<void> {
    const recipe = new Recipe(dto);
    await recipe.save();
  }
}
