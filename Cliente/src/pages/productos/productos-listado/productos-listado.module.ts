import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosListadoPage } from './productos-listado';

@NgModule({
  declarations: [
    ProductosListadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosListadoPage),
  ],
  exports: [
    ProductosListadoPage
  ]
})
export class ProductosListadoPageModule {}
