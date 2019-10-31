import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheEnsPage } from './fiche-ens';

@NgModule({
  declarations: [
    FicheEnsPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheEnsPage),
  ],
})
export class FicheEnsPageModule {}
