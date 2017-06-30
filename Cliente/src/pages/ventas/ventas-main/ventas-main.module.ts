import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentasMainPage } from './ventas-main';

@NgModule({
  declarations: [
    VentasMainPage,
  ],
  imports: [
    IonicPageModule.forChild(VentasMainPage),
  ],
  exports: [
    VentasMainPage
  ]
})
export class VentasMainPageModule {}
