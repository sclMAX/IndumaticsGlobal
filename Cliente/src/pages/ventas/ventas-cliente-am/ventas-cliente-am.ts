import {LoginPage} from './../../login/login';
import {VentasMainPage} from './../ventas-main/ventas-main';
import {
  Cliente,
  ClientesProvider,
  Clientes
} from './../../../providers/clientes/clientes';
import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ventas-cliente-am',
  templateUrl: 'ventas-cliente-am.html',
})
export class VentasClienteAmPage {
  cliente: Cliente;
  title: string;
  constructor(private navCtrl: NavController, private navParams: NavParams,
              private clientesP: ClientesProvider,
              private aletCtrl: AlertController,
              private loadCtrl: LoadingController) {
    let oldCliente: Cliente = this.navParams.get('Cliente');
    if (oldCliente) {
      this.cliente = oldCliente;
      this.title = "Modificar Cliente";
    } else {
      this.cliente = new Cliente();
      this.title = "Nuevo Cliente";
    }
  }

  onSubmit() {
    let load = this.loadCtrl.create({content: 'Guardando cliente...'});
    load.present().then(
        () => {this.clientesP.add(this.cliente)
                   .subscribe(
                       (res) => {
                         let alert = this.aletCtrl.create({
                           title: 'Agregar Cliente...',
                           message: 'Cliente agregado correctamente!',
                           buttons: [
                             {
                               text: 'Aceptar',
                               handler: () => {
                                 if (res) {
                                   Clientes.push(res);
                                 }
                                 this.goBack();
                               }
                             }
                           ]
                         });
                         alert.present();
                       },
                       (error: Response) => {
                         load.dismiss();
                         console.log('STATUS:',error.status);
                         switch (error.status) {
                           case 401:
                             this.navCtrl.setRoot(LoginPage);
                             break;
                           case 500:
                             console.error(
                                 'YA EXISTE UN CLIENTE CON ESTE NOMBRE! ERROR:',
                                 error.statusText);
                             break;
                           default:
                             console.error('ERROR INESPERADO!=>', error.statusText);
                         }
                       },
                       () => load.dismiss())});
  }
  goBack() { this.navCtrl.setRoot(VentasMainPage); }
}
