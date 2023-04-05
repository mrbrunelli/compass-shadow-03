export interface NewRecipeDto {
  name: string;
  ingredients: string[];
  preparation: string;
  recipeAuthor: {
    name: string;
    email: string;
  };
}
