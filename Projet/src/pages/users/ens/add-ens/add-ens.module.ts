import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEnsPage } from './add-ens';

@NgModule({
  declarations: [
    AddEnsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEnsPage),
  ],
})
export class AddEnsPageModule {}
