import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAppPage } from './add-app';

@NgModule({
  declarations: [
    AddAppPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAppPage),
  ],
})
export class AddAppPageModule {}
