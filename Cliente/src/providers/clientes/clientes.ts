import { Observable } from 'rxjs/Observable';
import {idSesion} from './../login/login.provider';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesProvider {
  private url: string = 'http://indumatics.ddns.net/clientes' +
                        '?idSesion=' + idSesion;
  constructor(private http: Http) {}

  getAll():Observable<Array<Cliente>>{
    return this.http.get(this.url).map(this.extractData);
  }

  private extractData(res:Response):Array<Cliente>{
    Clientes = res.json() || [];
    return Clientes;
  }
}

export class Cliente {
  idCliente: number;
  Nombre: string;
  Direccion: string;
  Localidad: string;
  Provincia: string;
  Pais: string;
  Email: string;
  Telefonos: string;
  idSucursal: number;
  FUA: Date;
  FI: Date;
}

export let Clientes: Array<Cliente>;
