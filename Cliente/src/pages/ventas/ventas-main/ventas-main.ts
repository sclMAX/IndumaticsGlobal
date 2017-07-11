import {
  VentasClienteDetallePage
} from '../ventas-cliente-detalle/ventas-cliente-detalle';
import {LoginPage} from './../../login/login';
import {Response} from '@angular/http';
import {HomePage} from './../../home/home';
import {
  Cliente,
  Clientes,
  ClientesProvider
} from './../../../providers/clientes/clientes';
import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  Platform
} from 'ionic-angular';
import {VentasClienteAmPage} from '../ventas-cliente-am/ventas-cliente-am';

@IonicPage()
@Component({selector: 'page-ventas-main', templateUrl: 'ventas-main.html'})
export class VentasMainPage {
  title: string;
  clientes: Array<Cliente>;

  constructor(private clientesP: ClientesProvider, private platform: Platform,
              private loadCtrl: LoadingController,
              private toastCtrl: ToastController, public navCtrl: NavController,
              public navParams: NavParams) {
    this.title = 'Ventas';
    let isUpdate:boolean = this.navParams.get('isUpdate');
    if (Clientes && !isUpdate) {
      this.clientes = Clientes;
    } else {
      this.getClientes();
    }
  }

  private async getClientes() {
    let load = this.loadCtrl.create({content: 'Buscando clientes...'});
    load.present().then(() => {
      this.clientesP.getAll().subscribe(
          data => this.clientes = data, (error: Response) => {
            load.dismiss();
            let toast = this.toastCtrl.create({
              showCloseButton: true,
              message: 'Acceso denegado!',
              position: 'middle'
            });
            toast.onDidDismiss(() => { this.navCtrl.setRoot(LoginPage); });
            toast.present();
          }, () => load.dismiss());
    });
  }
  onFindCancel(ev: any) { this.clientes = Clientes; }
  onFindClientes(ev: any) {
    this.onFindCancel(this);
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.clientes = this.clientes.filter((cliente) => {
        return (cliente.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
               (cliente.Telefonos.toLowerCase().indexOf(val.toLowerCase()) >
                -1) ||
               (cliente.Direccion.toLowerCase().indexOf(val.toLowerCase()) >
                -1) ||
               (cliente.Email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
               (cliente.idCliente.toString().toLowerCase().indexOf(
                    val.toLowerCase()) > -1);
      })
    }
  }

  clienteAdd() { this.navCtrl.setRoot(VentasClienteAmPage); }

  goCliente(cliente: Cliente) {
    this.navCtrl.push(VentasClienteDetallePage, {'Cliente': cliente});
  }

  goEditCliente(cliente: Cliente) {
    this.navCtrl.setRoot(VentasClienteAmPage, {Cliente: cliente})
  }

  goHome() { this.navCtrl.setRoot(HomePage); }
}
