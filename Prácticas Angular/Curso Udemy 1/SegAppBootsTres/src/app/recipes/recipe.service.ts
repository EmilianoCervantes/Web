import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

//Como tenemos el arreglo de recetas acá, tenemos que agregar el modelo
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe('Sushi',
					'Receta general de sushi',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1024px-Banjo_Shark_recipe.jpg',
					[
						new Ingredient('Pescado', 2),
						new Ingredient('Arroz', 1),
						new Ingredient('Vinagre de arroz', 1)
					]),
		new Recipe('Pizza',
					'Vegetables italian pizza',
					'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
					[
						new Ingredient('Harina', 400),
						new Ingredient('Aceite', 1),
						new Ingredient('Salami', 2)
					])
	];

	constructor(private slService: ShoppingListService){}

	getRecipes(){
		//The slice() method extracts parts of a string...
		//and returns the extracted parts in a new string.
		//Así sólo regresamos un nuevo array, que es sólo una copia.
		return this.recipes.slice();
	}

	getRecipe(index: number){
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	setRecipes(recipes: Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}