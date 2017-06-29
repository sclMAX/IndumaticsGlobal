import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-productos-main',
  templateUrl: 'productos-main.html',
})
export class ProductosMainPage {
  title: string;
  productosListadoRoot = 'ProductosListadoPage';
  productosStockRoot = 'ProductosStockPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Productos';
  }

  ionViewDidLoad() {}
}
