import { Request, Response, Router } from "express";
import { NewRecipeDto } from "../dto/NewRecipeDto";
import { RecipeService } from "../service/RecipeService";

const recipeRouter = Router();

const recipeService = new RecipeService();

recipeRouter.post(
  "/recipes",
  async (req: Request<never, never, NewRecipeDto>, res: Response) => {
    try {
      await recipeService.createNewRecipe(req.body);
      return res.status(201).send();
    } catch (error) {
      return res.status(500).send("internal server error");
    }
  }
);

export { recipeRouter };
