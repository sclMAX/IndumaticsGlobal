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
  AlertController,
  ToastController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ventas-cliente-am',
  templateUrl: 'ventas-cliente-am.html',
})
export class VentasClienteAmPage {
  cliente: Cliente;
  oldCliente: Cliente;
  title: string;
  isNew: boolean = true;
  constructor(private navCtrl: NavController, private navParams: NavParams,
              private clientesP: ClientesProvider,
              private aletCtrl: AlertController,
              private toastCtrl: ToastController,
              private loadCtrl: LoadingController) {
    this.oldCliente = this.navParams.get('Cliente');
    if (this.oldCliente) {
      this.cliente = JSON.parse(JSON.stringify(this.oldCliente));
      this.title = "Modificar Cliente";
      this.isNew = false;
    } else {
      this.cliente = new Cliente();
      this.title = "Nuevo Cliente";
      this.isNew = true;
    }
  }

  onSubmit() {
    let load = this.loadCtrl.create({content: 'Guardando cliente...'});
    let toast = this.toastCtrl.create({position: 'middle'});
    load.present().then(() => {
      if (this.isNew) {
        this.clientesP.add(this.cliente)
            .subscribe(
                (res) => {
                  toast.setDuration(1000);
                  toast.setMessage('Cliente guardado correctamente!');
                  toast.onDidDismiss(
                      () => { this.navCtrl.setRoot(VentasMainPage); });
                  toast.present();
                },
                (error: Response) => {
                  load.dismiss();
                  toast.setBackButtonText('OK');
                  toast.setShowCloseButton(true);
                  switch (error.status) {
                    case 401:
                      toast.setMessage('Acceso Denegado!');
                      toast.onDidDismiss(
                          () => { this.navCtrl.setRoot(LoginPage); });
                      toast.present();
                      break;
                    case 500:
                      toast.setMessage(
                          `Ya existe un cliente con la Razon Social: ${this.cliente.Nombre}!`);
                      break;
                    default:
                      toast.setMessage(
                          `Error inesperado! Cod:${error.status} - ERROR:${error.statusText}`);
                  }
                  toast.present();
                },
                () => load.dismiss());
      } else {
        if (this.cliente != this.oldCliente) {
          this.clientesP.update(this.cliente)
              .subscribe(
                  (res) => {
                    toast.setDuration(1000);
                    toast.setMessage('Cliente guardado correctamente!');
                    toast.onDidDismiss(
                        () => { this.navCtrl.setRoot(VentasMainPage); });
                    toast.present();
                  },
                  (error: Response) => {
                    load.dismiss();
                    toast.setBackButtonText('OK');
                    toast.setShowCloseButton(true);
                    switch (error.status) {
                      case 401:
                        toast.setMessage('Acceso Denegado!');
                        toast.onDidDismiss(
                            () => { this.navCtrl.setRoot(LoginPage); });
                        toast.present();
                        break;
                      case 500:
                        toast.setMessage(
                            `Ya existe un cliente con la Razon Social: ${this.cliente.Nombre}!`);
                        break;
                      default:
                        toast.setMessage(
                            `Error inesperado! Cod:${error.status} - ERROR:${error.statusText}`);
                    }
                    toast.present();
                  },
                  () => load.dismiss());
        } else {
          load.dismiss();
          this.navCtrl.setRoot(VentasMainPage);
        }
      }
    });
  }
  goBack() { this.navCtrl.setRoot(VentasMainPage); }
}
