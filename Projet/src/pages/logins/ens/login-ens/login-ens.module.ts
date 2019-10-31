import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginEnsPage } from './login-ens';

@NgModule({
  declarations: [
    LoginEnsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginEnsPage),
  ],
})
export class LoginEnsPageModule {}
