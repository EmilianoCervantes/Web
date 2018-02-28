import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('estaForm') slForm: NgForm;
	//Hay que destruir la suscripción cuando acabemos
	subscription: Subscription;
	//Queremos decir si está editando o no
	//para crear algo o editar algo existente
	editMode = false;
	editedItemIndex: number;
	editedItem: Ingredient;

	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.subscription = this.slService.startedEditing.subscribe(
			(index: number) => {
				this.editedItemIndex = index;
				this.editMode = true;
				this.editedItem = this.slService.getIngredient(index);
				this.slForm.setValue({
					nombre: this.editedItem.name,
					cantidad: this.editedItem.amount
				})
			}
		);
	}

	//Agregar, modificar, eliminar elementos o limpiar formulario
	onSubmitItem(form: NgForm){
		const value = form.value;
		//nombre y cantidad names especificados en el form
		const newIngredient = new Ingredient(value.nombre, value.cantidad);
		//Revisar si es modo Agregar o Editar
		if(this.editMode){
			this.slService.updateIngredient(this.editedItemIndex, newIngredient);
		} else{
			this.slService.addIngredient(newIngredient);
		}
		this.editMode = false;
		form.reset();
	}
	onClear(){
		this.slForm.reset();
		this.editMode = false;
	}
	onDelete(){
		this.slService.deleteIngredient(this.editedItemIndex)
		this.onClear();
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}