import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentasClienteAmPage } from './ventas-cliente-am';

@NgModule({
  declarations: [
    VentasClienteAmPage,
  ],
  imports: [
    IonicPageModule.forChild(VentasClienteAmPage),
  ],
  exports: [
    VentasClienteAmPage
  ]
})
export class VentasClienteAmPageModule {}
