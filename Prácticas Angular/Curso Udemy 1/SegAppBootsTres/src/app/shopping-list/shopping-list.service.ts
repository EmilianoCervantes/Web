import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	//Este evento sirve para detectar cuando se agreguen ingredients.
  //Está bien EventEmitter pero Subject es una mejor práctica
	ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	];

	getIngredients(){
		/*Con slice() no se agrega porque es una copia
		/se puede resolver quitando slice
		pero se hará con un EventEmitter*/
		return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	/* Técnica 1
	 * Único malo es que se emiten muchos eventos
	addIngredients(ingredients: Ingrediet[]){
		for(let ingredient of ingredients){
			this.addIngredient(ingredient);
		}
	}*/
	//Técnica 2
	addIngredients(ingredientsAdded: Ingredient[]){
		/*Spread "..." Es6 feature
		* nos permite transformar un array en una lista.
		* push() no maneja arrays []
		*/
		this.ingredients.push(...ingredientsAdded);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number){
    //Con splice() podemos iniciar en cierto punto del arreglo
    //y luego splice it (osea, removerlo)
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}