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
  title: string;
  constructor(private navCtrl: NavController, private navParams: NavParams,
              private clientesP: ClientesProvider,
              private aletCtrl: AlertController,
              private toastCtrl: ToastController,
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
    let toast = this.toastCtrl.create({position: 'middle'});
    load.present().then(
        () => {
            this.clientesP.add(this.cliente)
                .subscribe(
                    (res) => {
                      toast.setDuration(2000);
                      toast.setMessage('Cliente guardado correctamente!');
                      toast.onDidDismiss(() => {
                        if (res) Clientes.push(res);
                        this.navCtrl.setRoot(VentasMainPage);
                      });
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
                          toast.setMessage(`Error inesperado! Cod:${error.status} - ERROR:${error.statusText}`);
                      }
                      toast.present();
                    },
                    () => load.dismiss())});
  }
  goBack() { this.navCtrl.setRoot(VentasMainPage); }
}
