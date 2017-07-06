import {HomePage} from './../home/home';
import {LoginProvider, idSesion} from './../../providers/login/login.provider';
import {SucursalesProvider} from './../../providers/sucursales/sucursales';
import {Component} from '@angular/core';
import CryptoJS from 'crypto-js';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController
} from 'ionic-angular';


@IonicPage()
@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  sucursales: Array<Sucursal>;
  sucursal: Sucursal;
  idSucursal: number = 1;
  usuario: string = 'MAX';
  clave: string = 'Hola';
  badLoginCount: number = 0;
  maxBadLogin: number = 3

      constructor(private sucursalProvider: SucursalesProvider,
                  private toastCtrl: ToastController,
                  private login: LoginProvider,
                  private loadCtrl: LoadingController,
                  private alertCtrl: AlertController,
                  public navCtrl: NavController, public navParams: NavParams) {
    this.getSucursales();
  }

  async getSucursales() {
    let load = this.loadCtrl.create({content: 'Buscando sucursales'});
    load.present().then(() => {
      this.sucursalProvider.getSucursales().subscribe(
          data => { this.sucursales = data; }, error => {
            load.dismiss();
            let toast = this.toastCtrl.create(
                {message: 'Sin conexion!', duration: 2000, position: 'middle'});
            toast.onDidDismiss(() => { this.getSucursales(); });
            toast.present();
          }, () => load.dismiss());
    });
  }

  loginClick() {
    let load = this.loadCtrl.create({content: 'Validando Datos...'});
    load.present().then(
        () => {
            this.login.chkLogin(this.idSucursal, this.usuario,
                                CryptoJS.SHA1(this.clave).toString())
                .subscribe(data => {
                  if (idSesion != '') {
                    this.navCtrl.setRoot(HomePage);
                  } else {
                    this.badLoginCount++;
                    let toast = this.toastCtrl.create({
                      message:
                          `Acceso Denegado!(${this.badLoginCount}/${this.maxBadLogin}) Sucursal, Usuario y/o Clave incorrectos.`,
                      showCloseButton: true,
                      position: 'middle'
                    });
                    toast.onDidDismiss(() => {
                      this.idSucursal = 0;
                      this.usuario = '';
                      this.clave = '';
                    });
                    toast.present();
                  }
                }, error => { load.dismiss(); }, () => { load.dismiss(); })});
  }
}
