import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosMainPage } from './productos-main';

@NgModule({
  declarations: [
    ProductosMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosMainPage),
  ],
  exports: [
    ProductosMainPage
  ]
})
export class ProductosMainPageModule {}
