import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEnsPage } from './home-ens';

@NgModule({
  declarations: [
    HomeEnsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEnsPage),
  ],
})
export class HomeEnsPageModule {}
