import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentasClienteDetallePage } from './ventas-cliente-detalle';

@NgModule({
  declarations: [
    VentasClienteDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(VentasClienteDetallePage),
  ],
  exports: [
    VentasClienteDetallePage
  ]
})
export class VentasClienteDetallePageModule {}
