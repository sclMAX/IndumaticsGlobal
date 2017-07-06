import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SucursalesProvider {
  private url: string = 'http://indumatics.ddns.net/sucursales';
  constructor(private http: Http) {}

  getSucursales(): Observable<Array<Sucursal>> {
    return this.http.get(this.url)
        .map(this.extractData);
  }
  private extractData(res: Response):Array<Sucursal> {
    let body = res.json() ;
    return body || [];
  }
}
