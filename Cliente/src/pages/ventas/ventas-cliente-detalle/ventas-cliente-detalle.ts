import {VentasMainPage} from './../ventas-main/ventas-main';
import {Cliente} from './../../../providers/clientes/clientes';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the VentasClienteDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ventas-cliente-detalle',
  templateUrl: 'ventas-cliente-detalle.html',
})
export class VentasClienteDetallePage {
  cliente: Cliente;
  title: string;
  isShowDatos: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get('Cliente')) {
      this.cliente = this.navParams.get('Cliente');
      this.title = `Cliente: ${this.cliente.Nombre}`;
    } else {
      this.navCtrl.setRoot(VentasMainPage);
    }
  }
}
