import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LineasProvider {
  private url: string = 'http://indumatics.ddns.net/lineas';
  constructor(private http: Http) {}

  getAll(): Observable<Array<Linea>> {
    return this.http.get(this.url).map(this.extractData)
  }

  private extractData(res: Response) {
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