var $ = require('jquery');
var foundation = require('foundation');
var mustache = require('mustache');

$(document).foundation();

var califs = require('./data.json');

function promedio(califs){
	var suma = 0;
	for (var i = 0; i < 10; i++) {
		suma = suma + califs['alumnos'][i]['mat1'][0]+califs['alumnos'][i]['mat2'][0]+califs['alumnos'][i]['mat3'][0]+
			califs['alumnos'][i]['mat4'][0]+califs['alumnos'][i]['mat5'][0]+califs['alumnos'][i]['mat6'][0];
		var promedio = suma / 6;
		if(i == 0){
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332891').innerHTML = promedio;
		} else if (i == 1) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332278').innerHTML = promedio;
		} else if (i == 2) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01064754').innerHTML = promedio;
		} else if (i == 3) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01333820').innerHTML = promedio;
		} else if (i == 4) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332573').innerHTML = promedio;
		} else if (i == 5) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332638').innerHTML = promedio;
		} else if (i == 6) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332913').innerHTML = promedio;
		} else if (i == 7) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332959').innerHTML = promedio;
		} else if (i == 8) {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01333311').innerHTML = promedio;
		} else {
			var alumno = document.getElementByClassName('listado').getElementByClassName('average').getElementById('A01332650').innerHTML = promedio;
		}
	}
	return promedio;
}

for(var j = 0; j <6 ; j++){
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332891').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332891').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332278').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332278').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01064754').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01064754').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01333820').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado')getElementByClassName('boleta')..getElementBIde('A01333820').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332573').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332573').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332638').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332638').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332913').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332913').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332959').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332959').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01333311').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01333311').getElementByClassName('calif')[j].style.color="red";
	}
	if(document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332650').getElementByClassName('calif')[j] < 70){
		document.getElementByClassName('listado').getElementByClassName('boleta').getElementById('A01332650').getElementByClassName('calif')[j].style.color="red";
	}
}