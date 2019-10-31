import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEnsPage } from './list-ens';

@NgModule({
  declarations: [
    ListEnsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEnsPage),
  ],
})
export class ListEnsPageModule {}
