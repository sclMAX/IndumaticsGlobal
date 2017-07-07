import {Color} from './../colores/colores';
import {Perfil} from './../perfiles/perfiles';
import {TipoDocumento} from './../tipo-documentos/tipo-documentos-provider';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentosProvider {
  constructor(private http: Http) {}
  
}

export class DocumentoDB {
  idDocumento: number = 0;
  idTipoDocumento: number = 0;
  idCliente: number = 0;
  idSucursal: number = 0;
  Fecha: Date = new Date();
  FechaEntrega: Date = new Date();
  Comentarios: string = '';
  FUA: Date = new Date();
}

export class DocumentoItemsDB {
  idDocumentoDetalle: number = 0;
  idDocumento: number = 0;
  idPerfil: number = 0;
  idColor: number = 0;
  Cantidad: number = 0;
  Unidades: number = 0.0;
  PrecioUnidad: number = 0.0;
  Descuento: number = 0.0;
  FI: Date = new Date();
  FUA: Date = new Date();
}

export class DocumentoItems {
  idDocumentoDetalle: number = 0;
  Perfil: Perfil;
  Color: Color;
  Cantidad: number = 0;
  Unidades: number = 0.0;
  PrecioUnidad: number = 0.0;
  Descuento: number = 0.0;
  FI: Date = new Date();
  FUA: Date = new Date();
}

export class Documento {
  idDocumento: number = 0;
  TipoDocumento: TipoDocumento;
  Fecha: Date = new Date();
  FechaEntrega: Date = new Date();
  Comentarios: string = '';
  FUA: Date = new Date();
  Items: Array < DocumentoItems >= [];
}