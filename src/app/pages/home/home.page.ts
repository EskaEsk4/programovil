import { Component } from '@angular/core';
//Importación de control de formularios
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //en su interior se declaran los objetos a inyectar en la pagina TypeScript
  constructor() {}
  //defición de variables nombre; tipo ="valor inicial"
  // String, boolean, number, any(cualquier dato), array(definición de arreglo)
  rut:String = "";
  nombreCompleto:String = "";
  edad:Number;


// declaracion de objetos tipo formulario
elrut = new FormControl('');
elNombreCompleto = new FormControl('');
elEdad = new FormControl('');


// Grupo de controles de persona
persona = new FormGroup({
  elrut : new FormControl(''),
  elNombreCompleto : new FormControl (''),
  laEdad : new FormControl ('')
});
  //creacion de arreglo que contiene el listado de "personas"
  lista_personas = new Array();
  //Métodos de acceso
  cambiarDatos(){
    console.log(this.lista_personas);
  }
  grabar(){
    console.log(this.lista_personas);
    this.lista_personas.push(this.persona);
  }
//IMPLEMENTACIÓN DE CÓDIGO EN JAVASCRIPT
}
