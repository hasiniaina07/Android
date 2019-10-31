import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRhPage } from './login-rh';

@NgModule({
  declarations: [
    LoginRhPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRhPage),
  ],
})
export class LoginRhPageModule {}
