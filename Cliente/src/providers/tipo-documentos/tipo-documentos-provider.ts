
import {ApiBasePath} from './../../comun/rutas';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TipoDocumentosProvider {
  private url: string = `${ApiBasePath}/tipoDocumentos`;
  constructor(private http: Http) {}

  getAll(): Observable<Array<TipoDocumento>> {
    return this.http.get(this.url).map(this.mapData);
  }

  get(idTipoDocumento: number): TipoDocumento {
    return TiposDocumentos.find(
        item => {return item.idTipoDocumento === idTipoDocumento});
  }

  private mapData(res: Response): Array<TipoDocumento> {
    TiposDocumentos = res.json() || [];
    return TiposDocumentos;
  }
}

export class TipoDocumento {
  idTipoDocumento: number = 0;
  Letra: string = '';
  Documento: string = '';
  Descripcion: string = '';
  isActualizaStock: boolean = false;
  isEditable: boolean = false;
  isSuma: boolean = true;
  FI: Date = new Date();
  FUA: Date = new Date();
}

export let TiposDocumentos: Array<TipoDocumento> = [];
export const idPresupuesto: number = 0;
export const idPedidoPendiente: number = 1;
export const idPedidoEntregado: number = 2;
