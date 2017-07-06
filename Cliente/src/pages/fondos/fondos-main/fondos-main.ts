import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fondos-main',
  templateUrl: 'fondos-main.html',
})
export class FondosMainPage {
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Fondos';
  }

  goHome(){this.navCtrl.setRoot(HomePage);}
}
