import {Clientes, ClientesProvider} from './../../providers/clientes/clientes';
import {
  TipoDocumentosProvider,
  TiposDocumentos
} from './../../providers/tipo-documentos/tipo-documentos-provider';
import {PerfilesProvider, Perfiles} from './../../providers/perfiles/perfiles';
import {LineasProvider, Lineas} from './../../providers/lineas/lineas';
import {ColoresProvider, Colores} from './../../providers/colores/colores';
import {ProductosMainPage} from './../productos/productos-main/productos-main';
import {FondosMainPage} from './../fondos/fondos-main/fondos-main';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VentasMainPage} from "./../ventas/ventas-main/ventas-main";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title: string;
  buttonsMenu: Array<ButtonMenu>;
  isDownload: boolean = false;
  msgDownload: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private coloresP: ColoresProvider,
              private lineasP: LineasProvider,
              private perfilesP: PerfilesProvider,
              private tipoDocumentosP: TipoDocumentosProvider,
              private clientesP: ClientesProvider) {
    this.title = "Red Indumatics";
    this.buttonsMenu = [
      {title: 'Ventas', page: VentasMainPage, iconName: 'cart'},
      {title: 'Productos', page: ProductosMainPage, iconName: 'cube'},
      {title: 'Fondos', page: FondosMainPage, iconName: 'logo-usd'}
    ];
    this.getData();
  }

  private async getData() {
    if (!Colores) {
      this.isDownload = true;
      this.msgDownload = 'Buscando Colores...';
      this.coloresP.getAll().subscribe(() => {}, () => {this.getData()},
                                       () => {this.getData()});
    }
    if (Colores && !Lineas) {
      this.isDownload = true;
      this.msgDownload = 'Buscando Lineas disponibles...';
      this.lineasP.getAll().subscribe(() => {}, () => {this.getData()},
                                      () => {this.getData()});
    }
    if (Colores && Lineas && !TiposDocumentos) {
      this.isDownload = true;
      this.msgDownload = 'Buscando Tipos de Documentos...';
      this.tipoDocumentosP.getAll().subscribe(() => {}, () => {this.getData()},
                                              () => {this.getData()});
    }
    if (Colores && Lineas && TiposDocumentos && !Perfiles) {
      this.isDownload = true;
      this.msgDownload = 'Buscando Perfiles disponibles...';
      this.perfilesP.getAll().subscribe(() => {}, () => {this.getData()},
                                        () => {this.getData()});
    }
    if (Colores && Lineas && TiposDocumentos && Perfiles && !Clientes) {
      this.isDownload = true;
      this.msgDownload = 'Buscando Clientes...';
      this.clientesP.getAll().subscribe(() => {}, () => {this.getData()},
                                        () => {this.getData()});
    }
    if (Colores && Lineas && TiposDocumentos && Perfiles && Clientes) {
      this.isDownload = false;
    }
  }


  onButtonClick(page: any) {
    if (page) {
      this.navCtrl.setRoot(page);
    }
  }
}

export interface ButtonMenu {
  title: string;
  page: any;
  iconName: string;
}
