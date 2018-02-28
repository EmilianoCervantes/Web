var app = angular.module("ListaDeAlumnos",["LocalStorageModule"])
	.filter("removeHtml",function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FirstController",["$scope","localStorageService",function(s,LSS){
	s.mi_html = "<p>Hola Mundo</p>"
	if(LSS.get("angular-listadealumnos")){
		s.alumnos = LSS.get("angular-listadealumnos");
	} else {
		s.alumnos = [
			{
				nombre: "Emiliano Cervantes",
				carrera: "ITC",
				matricula: "A01332891"
			},
			{
				nombre: "Irvin Uriel",
				carrera: "ITC",
				matricula: "A01333820"
			},
			{
				nombre: "Alfredo Puente",
				carrera: "ITC",
				matricula: "A01332573"
			},
			{
				nombre: "Diego Islas",
				carrera: "ITC",
				matricula: "A01332956"
			},
			{
				nombre: "Fernando Saavedra",
				carrera: "ITC",
				matricula: "A01333410"
			}
		];
	}
	s.$watchCollection('alumnos',function(nuevoValor,viejoValor){
		LSS.set("angular-listadealumnos",s.alumnos);
	});
	s.agregarAlumno = function() {
		s.alumnos.push(s.nuevoAlumno);
		s.nuevoAlumno = {};
		
	}
	s.clean = function(){
		s.alumnos = [];
		
	}
}]);	