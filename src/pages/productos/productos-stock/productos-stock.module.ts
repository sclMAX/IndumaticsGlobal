import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosStockPage } from './productos-stock';

@NgModule({
  declarations: [
    ProductosStockPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosStockPage),
  ],
  exports: [
    ProductosStockPage
  ]
})
export class ProductosStockPageModule {}
