import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	//La condición como input
	//Cuando la condición cambie, que se ejecute
	@Input() set appUnless(condicion: boolean) {
		if (!condicion) {
			//Como dice el nombre crea una vista en ese contenedor
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}
	//Inyectamos el template
	//ViewContainerRef - where should we render it
  	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
