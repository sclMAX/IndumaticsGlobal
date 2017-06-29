import { HomePage } from './../pages/home/home';
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

@NgModule({
  declarations: [MyApp,  LoginPage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    SucursalesProvider
  ]
})
export class AppModule {
}
