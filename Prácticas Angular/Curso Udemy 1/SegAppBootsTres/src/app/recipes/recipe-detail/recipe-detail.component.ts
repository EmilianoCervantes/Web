import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	//Sin @Input() porque así no recibimos el valor.
	 recipeInDetail: Recipe;
	 id: number;

	constructor(private recipeService: RecipeService,
				private route: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.recipeInDetail = this.recipeService.getRecipe(this.id);
			}
		);
	}

	addToShoppingList(){
		this.recipeService.addIngredientsToShoppingList(this.recipeInDetail.ingredients);
	}
	onEditRecipe(){
		//Método 1: 'edit' accede al id (se anexa) en el que estamos
		this.router.navigate(['edit'], {relativeTo: this.route});
		//Método 2 indica lo mismo que el de arriba pero de un modo más complejo/completo
		//this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
	}
	onDeleteRecipe(){
		this.recipeService.deleteRecipe(this.id);
		this.router.navigate(['/recipes']);
	}
}