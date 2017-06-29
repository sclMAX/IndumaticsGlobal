import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title: string;
  buttonsMenu: Array<ButtonMenu>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = "Red Indumatics";
    this.buttonsMenu = [
      {title: 'Ventas', page: 'VentasMainPage', iconName: 'cart'},
      {title: 'Productos', page: 'ProductosMainPage', iconName: 'cube'},
      {title: 'Fondos', page: 'FondosMainPage', iconName: 'logo-usd'}
    ];
  }

  onButtonClick(page: any) {
    if (page) {
      this.navCtrl.push(page);
    }
  }

  ionViewDidLoad() {}
}

export interface ButtonMenu {
  title: string;
  page: any;
  iconName: string;
}
