import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//Importar el uso de formularios reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule //incluir como modulo de importación al TypeScript
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
