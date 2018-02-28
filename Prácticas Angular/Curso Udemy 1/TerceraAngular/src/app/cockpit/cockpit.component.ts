import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	//Creo dos nuevas propiedades para los métodos en cockpit html
	//Hay que marcarlas como eventos(propiedades) que podemos emitir/implementar
	//EventEmitter es del tipo genérico,
	//se define qué clase de evento se va a manejar '<>'.
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	//Reemplazado por nameInput
	//newServerName = '';
	
	//newServerContent = '';
	@ViewChild('serverContentInput') serverContentInput: ElementRef;
	constructor() { }

	ngOnInit() {
	}
	//Se puede poner de manera explícita que es input html
	onAddServer(nameInput: HTMLInputElement){
		//emit() eimte un evento de ese tipo
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		});
	}
	onAddBlueprint(nameInput: HTMLInputElement){
		this.blueprintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContentInput.nativeElement.value
		});
	}
}
