import { Directive, OnInit, Renderer2, ElementRef,
		HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	//Custom-binding para elegir el color que queremos en ver de hardcode
	@Input () defaultColor: string = 'transparent';
	//Le damos un alias con el nombre del selector
	//Así no tenemos que poner [highlightColor] en el html
	@Input ('appBetterHighlight') highlightColor: string = 'blue';
	//('que-Propiedad-Del-Hosting-Element-Queremos-Hacer-Bind')
	//Hay que dar un color inicial o dará error
	@HostBinding('style.backgroundColor') backgroundColor: string;

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }
	ngOnInit() {
		//setStyle(any,style: string, calue: any, flags?: RendererStyleFlags2)
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

		//Se pasó esto a OnInit porque había un bug de que iniciaba transparente
		this.backgroundColor = this.defaultColor;
	}
	//To react to some events:
	//Se comentaron los del renderer por opciones sin renderer
	//Renderer está muy bien pero esto es más sencillo
	@HostListener('mouseenter') mouseover(eventData: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.highlightColor;
	}
	@HostListener('mouseleave') mouseleave(eventData: Event){
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
		this.backgroundColor = this.defaultColor;
	}

}
