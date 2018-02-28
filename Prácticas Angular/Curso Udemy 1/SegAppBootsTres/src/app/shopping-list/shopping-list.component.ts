import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //Se quiere obtener la lista desde recetas...
  //así que se manda a app.module
  //providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	//Necesitaremos un modelo para ingre
	//El cual pasamos a shopping-list.service
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    //Detectar cuando un ingrediente se agregue
    this.subscription = this.slService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
