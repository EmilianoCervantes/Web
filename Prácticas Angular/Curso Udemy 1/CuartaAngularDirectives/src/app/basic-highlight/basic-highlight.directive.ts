import { Directive, ElementRef, OnInit } from '@angular/core';

//Para configurar la directiva
@Directive({
	//Con los brackets se reconocerá en otras partes...
	//sin tener que usar los [].
	selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
	//Al pasar los elementos por el constructor
	//se realiza una inyeccion
	//Angular tratará de proveer lo que necesitamos
	constructor(private elementRef: ElementRef) {
	}
	ngOnInit() {
		//No es buena práctica hacer esto:
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
}