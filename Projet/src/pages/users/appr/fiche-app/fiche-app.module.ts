import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheAppPage } from './fiche-app';

@NgModule({
  declarations: [
    FicheAppPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheAppPage),
  ],
})
export class FicheAppPageModule {}
