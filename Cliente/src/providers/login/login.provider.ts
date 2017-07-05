import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export let idSesion: string;

@Injectable()
export class LoginProvider {
  private url: string = 'http://indumatics.ddns.net/login';
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
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response): string {
    let body = res.json();
    idSesion = body['idSesion'] || '';
    return idSesion;
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}