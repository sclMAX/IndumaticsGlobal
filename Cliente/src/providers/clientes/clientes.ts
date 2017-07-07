import {Documento} from './../documentos/documentos';
import {ApiBasePath} from './../../comun/rutas';
import {Observable} from 'rxjs/Observable';
import {idSesion} from './../login/login.provider';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesProvider {
  private url: string = `${ApiBasePath}/clientes`;
  constructor(private http: Http) {}

  getAll(): Observable<Array<Cliente>> {
    return this.http.get(this.url,
                         new RequestOptions({params: {'idSesion': idSesion}}))
        .map(this.mapDataArray);
  }

  add(cliente: Cliente): Observable<Cliente> {
    let headers =
        new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    let body = `idSesion=${idSesion}&Cliente=${JSON.stringify(cliente)}`;
    return this.http.post(this.url, body, options).map(this.mapData);
  }

  private mapData(res: Response): Cliente {
    let body = res.json();
    let cliente: Cliente = body[0] || {};
    return cliente;
  }

  private mapDataArray(res: Response): Array<Cliente> {
    Clientes = res.json() || [];
    return Clientes;
  }
}

export class Cliente {
  idCliente: number = 0;
  Nombre: string = '';
  Direccion: string = '';
  Localidad: string = '';
  Provincia: string = '';
  Pais: string = 'Argentina';
  Email: string = '';
  Telefonos: string = '';
  Comentarios: string = '';
  idSucursal: number = 0;
  FUA: Date = new Date();
  FI: Date = new Date();
  Documentos: Array<Documento> = [];
}

export let Clientes: Array<Cliente>;
