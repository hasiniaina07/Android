import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../../../providers/post-provider';
import { Storage } from '@ionic/Storage';

import { AddEnsPage } from '../../../users/ens/add-ens/add-ens';
import { HomeEnsPage } from '../../../homes/ens/home-ens/home-ens';

@IonicPage()
@Component({
  selector: 'page-login-ens',
  templateUrl: 'login-ens.html',
})
export class LoginEnsPage {

  nom_ens: string ="";
  pass_ens: string = "";

  constructor(
    private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('LoginEnsPage');
  }

  formEns() {
    this.navCtrl.push(AddEnsPage);
  }

  login() {
    if(this.nom_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Nom et prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.pass_ens == ""){
      const toast= this.toastCtrl.create({
        message: 'aucun Mot de passe',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        nom_ens: this.nom_ens,
        pass_ens: this.pass_ens,
        action: 'login_ens'
      };

      this.postPvdr.postData(body, 'action.php').subscribe((data) => {
        if(data.success){
          this.storage.set('ens_storage', data.result);
          this.navCtrl.setRoot(HomeEnsPage);
          const toast = this.toastCtrl.create({
            message:'Authentification réussit',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message:'Pas de compte',
            duration: 3000
          });
          toast.present();
        }
      });
    }
  }
}
