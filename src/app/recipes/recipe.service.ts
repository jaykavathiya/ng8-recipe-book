import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'This is simply a test',
            'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=-tA_cB-C',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Tomatoes', 10)
            ]),
        new Recipe(
            'A test Recipe',
            'This is simply a test',
            'https://img.taste.com.au/K02TrrZJ/w720-h480-cfill-q80/taste/2016/11/rachel-87711-2.jpeg',
            [
                new Ingredient('Potatoes', 10),
                new Ingredient('Cheese', 1)
            ])         
    ];

    constructor(private slSrvc: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientstoShoppingList(ingredients: Ingredient[]) {
        this.slSrvc.addIngredients(ingredients);
    }
}