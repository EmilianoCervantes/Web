import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	//Attach or detach css dynamically:
	//Bind to properties of the elements the directive is places on.
	@HostBinding('class.open') isOpen = false;
	constructor() { }
	//Escuchar clicks; toggle significa alternar
	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
		console.log('clicked');
	}
}
