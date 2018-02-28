import { Component, OnInit, Input, ViewEncapsulation,
	OnChanges, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
	//Accedido en app.component.html a través de un binding
	@Input('srvElement') element: {type: string, name: string, content: string};
	@Input() name: string;
	@ViewChild('heading') header: ElementRef;
	//Pasa a través de <ng-content></ng-content>
	@ContentChild('contentParagraph') parrafo: ElementRef;

  constructor() {
  	console.log('constructor llamado!');
  }
  //Único que recibe algo
  ngOnChanges(changes: SimpleChanges){
  	console.log('ngOnChanges llamado!');
  }

  ngOnInit() {
  	console.log('ngOnInit llamado!');
  	console.log('Text Content: '+this.header.nativeElement.textContent);
  }

}
