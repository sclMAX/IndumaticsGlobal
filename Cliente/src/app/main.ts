import {ClientesProvider} from './../providers/clientes/clientes';
import {PerfilesProvider} from './../providers/perfiles/perfiles';
import {LineasProvider} from './../providers/lineas/lineas';
import {LoginProvider} from './../providers/login/login.provider';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(
    AppModule,
    [LoginProvider, LineasProvider, PerfilesProvider, ClientesProvider]);
