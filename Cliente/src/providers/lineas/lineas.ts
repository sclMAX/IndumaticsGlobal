import {ApiBasePath} from './../../comun/rutas';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LineasProvider {
  private url: string = `${ApiBasePath}/lineas`;
  constructor(private http: Http) {}

  getAll(): Observable<Array<Linea>> {
    return this.http.get(this.url).map(this.mapData)
  }

  private mapData(res: Response):Array<Linea> {
    Lineas = res.json() || [];
    return Lineas;
  }
}

export class Linea {
  idLinea: number;
  Nombre: string;
  Descripcion: string;
}

export let Lineas: Array<Linea>;