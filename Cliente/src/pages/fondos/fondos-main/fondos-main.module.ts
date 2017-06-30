import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FondosMainPage } from './fondos-main';

@NgModule({
  declarations: [
    FondosMainPage,
  ],
  imports: [
    IonicPageModule.forChild(FondosMainPage),
  ],
  exports: [
    FondosMainPage
  ]
})
export class FondosMainPageModule {}
