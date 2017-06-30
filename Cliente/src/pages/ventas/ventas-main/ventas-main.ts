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
  LoadingController
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ventas-main',
  templateUrl: 'ventas-main.html',
})
export class VentasMainPage {
  title: string;
  clientes: Array<Cliente>;

  constructor(private clientesP: ClientesProvider,
              private loadCtrl: LoadingController,
              public navCtrl: NavController, public navParams: NavParams) {
    this.title = 'Ventas';
    if (Clientes) {
      this.clientes = Clientes;
    } else {
      this.getClientes();
    }
  }

  private async getClientes() {
    let load = this.loadCtrl.create({content: 'Buscando clientes...'});
    load.present().then(() => {
      this.clientesP.getAll().subscribe(data => this.clientes = data,
                                        error => console.log(error),
                                        () => load.dismiss());
    });
  }

  clienteAdd(){
   
  }
}
