import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheRhPage } from './fiche-rh';

@NgModule({
  declarations: [
    FicheRhPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheRhPage),
  ],
})
export class FicheRhPageModule {}
