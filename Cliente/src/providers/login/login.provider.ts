import { ApiBasePath } from './../../comun/rutas';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export let idSesion: string;

@Injectable()
export class LoginProvider {
  private url: string = `${ApiBasePath}/login`;
  constructor(private http: Http) {}

  chkLogin(sucursal: number, usuario: string,
           clave: string): Observable<string> {
    return this.http
        .post(
            this.url, {}, new RequestOptions({
              params:
                  {'idSucursal': sucursal, 'Usuario': usuario, 'Clave': clave},
              headers: new Headers(
                  {'Content-Type': 'application/x-www-form-urlencoded'})
            }))
        .map(this.mapData);
  }

  private mapData(res: Response): string {
    let body = res.json();
    idSesion = body['idSesion'] || '';
    return idSesion;
  }
}