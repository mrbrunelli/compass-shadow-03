import { NewRecipeDto } from "../dto/NewRecipeDto";
import { Recipe } from "../model/Recipe";

export class RecipeService {
  async createNewRecipe(dto: NewRecipeDto): Promise<void> {
    const recipe = new Recipe(dto);
    await recipe.save();
  }
}
