import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PerfilesProvider {
  private url: string = 'http://indumatics.ddns.net/perfiles';
  constructor(private http: Http) {}

  getAll(): Observable<Array<Perfil>> {
    return this.http.get(this.url).map(this.extractData);
  }
  private extractData(res: Response):Array<Perfil> {
    Perfiles = res.json() || [];
    return Perfiles;
  }
}

export class Perfil {
  idPerfil: string;
  Descripcion: string;
  Largo: number;
  Peso: number;
  Barras: number;
  idLinea: number;
}

export let Perfiles: Array<Perfil>;
