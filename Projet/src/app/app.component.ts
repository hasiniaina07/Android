import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/Storage';

import { HomePage } from '../pages/home/home';

import { LoginRhPage } from '../pages/logins/admin/login-rh/login-rh';
import { HomeRhPage } from '../pages/homes/admin/home-rh/home-rh';

import { HomeEnsPage } from '../pages/homes/ens/home-ens/home-ens';
import { LoginEnsPage } from '../pages/logins/ens/login-ens/login-ens';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('content') navi: NavController;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    private storage: Storage,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
      
      this.initializeApp();

      //use an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Administratif', component: LoginRhPage },
      { title: 'Enseignant', component: LoginEnsPage },
      //{ title: 'Mpianatra', component: LoginetPage },
    ];
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    //Storage RH
    this.storage.get('rh_storage').then((res) => {
      if (res != null){
        this.rootPage = HomeRhPage;
      }
    });

    //Storage Enseignant
    this.storage.get('ens_storage').then((res) => {
      if(res != null){
        this.rootPage = HomeEnsPage;
      }
    });
    
  }

  openPage(page){
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}