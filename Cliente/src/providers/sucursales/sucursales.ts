import {ApiBasePath} from './../../comun/rutas';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SucursalesProvider {
  private url: string = `${ApiBasePath}/sucursales`;
  constructor(private http: Http) {}

  getSucursales(): Observable<Array<Sucursal>> {
    return this.http.get(this.url).map(this.mapData);
  }
  private mapData(res: Response): Array<Sucursal> {
    Sucursales = res.json() || [];
    return Sucursales;
  }
}

export class Sucursal {
  idSucursal: number = 0;
  Nombre: string = '';
  Descripcion: string = '';
  FI: Date = new Date();
  FUA: Date = new Date();
}

export let Sucursales: Array<Sucursal>;