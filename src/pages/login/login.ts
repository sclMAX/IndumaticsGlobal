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
  AlertController
} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [SucursalesProvider]
})
export class LoginPage {
  sucursales: Array<Sucursal>;
  sucursal: Sucursal;
  idSucursal: number;
  usuario: string;
  clave: string;
  badLoginCount: number = 0;

  constructor(private sucursalProvider: SucursalesProvider,
              private login: LoginProvider, private loadCtrl: LoadingController,
              private alertCtrl: AlertController, public navCtrl: NavController,
              public navParams: NavParams) {
    this.getSucursales();
  }

  ionViewDidLoad() {}

  async getSucursales() {
    let load = this.loadCtrl.create({content: 'Buscando sucursales'});
    load.present().then(() => {
      this.sucursalProvider.getSucursales().subscribe(data => {
        this.sucursales = <any>data;
      }, error => { console.log(error); }, () => load.dismiss());
    });
  }

  loginClick() {
    let load = this.loadCtrl.create({content: 'Validando Datos...'});
    load.present().then(
        () => {this.login.chkLogin(this.idSucursal, this.usuario,
                                   CryptoJS.SHA1(this.clave).toString())
                   .subscribe(
                       data => {
                         if (idSesion != '') {
                           this.navCtrl.setRoot(HomePage);
                         } else {
                           this.badLoginCount++;
                           let alert = this.alertCtrl.create({
                             title: 'Acceso denegado!',
                             message: 'Usuario y/o Clave incorrectos.',
                             buttons: ['Aceptar']
                           });
                           this.idSucursal = 0;
                           this.usuario = '';
                           this.clave = '';
                      //     load.dismiss();
                           alert.present(); 
                         }
                       },
                       error => {
                         load.dismiss();
                         console.log(error);
                       },
                       () => { load.dismiss(); })});
  }
}
