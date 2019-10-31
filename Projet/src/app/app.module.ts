import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/Storage';

import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//APPRENANT
import { AddAppPage } from '../pages/users/appr/add-app/add-app';
import { FicheAppPage } from '../pages/users/appr/fiche-app/fiche-app';
import { ListAppPage } from '../pages/users/appr/list-app/list-app';
import { UpdateAppPage } from '../pages/users/appr/update-app/update-app';

//ENSEIGNANT
import { AddEnsPage } from '../pages/users/ens/add-ens/add-ens';
import { FicheEnsPage } from '../pages/users/ens/fiche-ens/fiche-ens';
import { ListEnsPage } from '../pages/users/ens/list-ens/list-ens';
import { UpdateEnsPage } from '../pages/users/ens/update-ens/update-ens';
import { LoginEnsPage } from '../pages/logins/ens/login-ens/login-ens';
import { HomeEnsPage } from '../pages/homes/ens/home-ens/home-ens';

//RESSOURCE HUMAINE
import { ListRhPage } from '../pages/users/admin/rh/list-rh/list-rh';
import { AddRhPage } from '../pages/users/admin/rh/add-rh/add-rh';
import { UpdateRhPage } from '../pages/users/admin/rh/update-rh/update-rh';
import { FicheRhPage } from '../pages/users/admin/rh/fiche-rh/fiche-rh'
import { LoginRhPage } from '../pages/logins/admin/login-rh/login-rh';
import { HomeRhPage } from '../pages/homes/admin/home-rh/home-rh';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
//APPRENANT
    AddAppPage,
    FicheAppPage,
    ListAppPage,
    UpdateAppPage,
//ENSEIGNANT
    AddEnsPage,
    FicheEnsPage,
    ListEnsPage,
    UpdateEnsPage,
    LoginEnsPage,
    HomeEnsPage,
//RESSOURCE HUMAINE
    ListRhPage,
    AddRhPage,
    UpdateRhPage,
    FicheRhPage,
    LoginRhPage,
    HomeRhPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
//APPRENANT
    AddAppPage,
    FicheAppPage,
    ListAppPage,
    UpdateAppPage,
//ENSEIGNANT
    AddEnsPage,
    FicheEnsPage,
    ListEnsPage,
    UpdateEnsPage,
    LoginEnsPage,
    HomeEnsPage,
//RESSOURCE HUMAINE
    ListRhPage,
    AddRhPage,
    UpdateRhPage,
    FicheRhPage,
    LoginRhPage,
    HomeRhPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Media,
    File
  ]
})
export class AppModule {}
