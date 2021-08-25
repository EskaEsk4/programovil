import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  rut:String = "";
  nombreCompleto:String = "";
  edad:BigInteger;
  cambiarDatos(){
    alert('pinchó botón');
  }

}
