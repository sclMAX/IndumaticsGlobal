import {idSesion} from './../login/login.provider';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesProvider {
  private url: string = 'http://indumatics.ddns.net/clientes' +
                        '?idSesion=' + idSesion;
  constructor(private http: Http) {}
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
