import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	//Tal vez deberíamos mover estos elementos a cockpit.component.ts
	//Pero ya no los tendríamos aquí
	//Los necesitamos aquí
	serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
	//newServerName = '';
	//newServerContent = '';

	//El nombre de los métodos es porque serán ejecutados después
	//de que al botón en cockpit.component se le de click
	onServerAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
		  type: 'server',
		  //name: this.newServerName,
		  //content: this.newServerContent
		  name: serverData.serverName,
		  content: serverData.serverContent
		});
	}

	onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
		  type: 'blueprint',
		  name: blueprintData.serverName,
		  content: blueprintData.serverContent
		});
	}
}
