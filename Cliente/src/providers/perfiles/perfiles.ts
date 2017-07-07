import {ApiBasePath} from './../../comun/rutas';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PerfilesProvider {
  private url: string = `${ApiBasePath}/perfiles`;
  constructor(private http: Http) {}

  getAll(): Observable<Array<Perfil>> {
    return this.http.get(this.url).map(this.mapData);
  }
  private mapData(res: Response): Array<Perfil> {
    Perfiles = res.json() || [];
    return Perfiles;
  }
}

export class Perfil {
  idPerfil: number = 0;
  CodigoPerfil: string = '';
  Descripcion: string = '';
  Largo: number = 6050;
  Peso: number = 0.0;
  Barras: number = 0;
  idLinea: number = 0;
  FI: Date = new Date();
  FUA: Date = new Date();
}

export let Perfiles: Array<Perfil>;
