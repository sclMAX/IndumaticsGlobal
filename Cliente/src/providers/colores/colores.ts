import { ApiBasePath } from './../../comun/rutas';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ColoresProvider {
  private url:string =`${ApiBasePath}/colores`;
  constructor(private http: Http) {}

  getAll():Observable<Array<Color>>{
    return this.http.get(this.url).map(this.mapData);
  }

  private mapData(res:Response):Array<Color>{
    Colores = res.json() || [];
    return Colores;
  }
}

export class Color {
  idColor: number = 0;
  Color: string = '';
  IncrementoPeso: number = 0.0;
  FI: Date = new Date();
  FUA: Date = new Date();
}

export let Colores:Array<Color>;