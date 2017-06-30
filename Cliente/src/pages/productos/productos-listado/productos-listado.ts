import {
  Lineas,
  Linea,
  LineasProvider
} from './../../../providers/lineas/lineas';
import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-productos-listado',
  templateUrl: 'productos-listado.html',
})
export class ProductosListadoPage {
  lineas: Array<Linea>;

  constructor(private loadCtrl: LoadingController,
              public navCtrl: NavController, public navParams: NavParams,
              public lineasP: LineasProvider) {
    if (Lineas) {
      this.lineas = Lineas;
    } else {
      this.getLineas();
    }
  }

 async getLineas() {
    let load =
        this.loadCtrl.create({content: 'Buscando Lineas disponibles...'});
    load.present().then(
        () => {this.lineasP.getAll().subscribe(() => {this.lineas = Lineas},
                                               error => {console.log(error)},
                                               () => load.dismiss())})
  }
}
