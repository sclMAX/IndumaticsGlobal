import {FondosMainPage} from './../pages/fondos/fondos-main/fondos-main';
import {
  ProductosMainPage
} from './../pages/productos/productos-main/productos-main';
import {VentasMainPage} from './../pages/ventas/ventas-main/ventas-main';
import {
  VentasClienteDetallePage
} from './../pages/ventas/ventas-cliente-detalle/ventas-cliente-detalle';
import {
  VentasClienteAmPage
} from './../pages/ventas/ventas-cliente-am/ventas-cliente-am';
import {HomePage} from './../pages/home/home';
import {LoginPage} from './../pages/login/login';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import {MyApp} from './app.component';
import {LoginProvider} from '../providers/login/login.provider';
import {SucursalesProvider} from '../providers/sucursales/sucursales';
import {LineasProvider} from '../providers/lineas/lineas';
import {PerfilesProvider} from '../providers/perfiles/perfiles';
import {ClientesProvider} from '../providers/clientes/clientes';
import {
  TipoDocumentosProvider
} from '../providers/tipo-documentos/tipo-documentos-provider';
import {ColoresProvider} from '../providers/colores/colores';
import {DocumentosProvider} from '../providers/documentos/documentos';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

export const FireBaseConfig = {
  apiKey: "AIzaSyD7zoKlOj8l12BHBMqgUI4IT2TfcPoG4Z4",
  authDomain: "indumaticsapp.firebaseapp.com",
  databaseURL: "https://indumaticsapp.firebaseio.com",
  projectId: "indumaticsapp",
  storageBucket: "indumaticsapp.appspot.com",
  messagingSenderId: "293106198530"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    VentasMainPage,
    ProductosMainPage,
    FondosMainPage,
    VentasClienteAmPage,
    VentasClienteDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FireBaseConfig, 'indumaticsapp'),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    VentasMainPage,
    ProductosMainPage,
    FondosMainPage,
    VentasClienteAmPage,
    VentasClienteDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    SucursalesProvider,
    LineasProvider,
    PerfilesProvider,
    ClientesProvider,
    TipoDocumentosProvider,
    ColoresProvider,
    DocumentosProvider
  ]
})
export class AppModule {
}
