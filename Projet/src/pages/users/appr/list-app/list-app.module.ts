import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAppPage } from './list-app';

@NgModule({
  declarations: [
    ListAppPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAppPage),
  ],
})
export class ListAppPageModule {}
