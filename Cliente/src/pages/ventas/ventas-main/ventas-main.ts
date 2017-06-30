import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ventas-main',
  templateUrl: 'ventas-main.html',
})
export class VentasMainPage {

  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Ventas'
  }

  ionViewDidLoad() {
  }

}
