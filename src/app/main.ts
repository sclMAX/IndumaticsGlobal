import {LoginProvider} from './../providers/login/login.provider';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [LoginProvider]);
