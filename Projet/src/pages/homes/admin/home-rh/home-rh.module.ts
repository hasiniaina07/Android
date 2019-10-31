import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeRhPage } from './home-rh';

@NgModule({
  declarations: [
    HomeRhPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeRhPage),
  ],
})
export class HomeRhPageModule {}
