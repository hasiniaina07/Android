import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../../providers/post-provider';
import { AddRhPage } from '../../../users/admin/rh/add-rh/add-rh';
import { HomeRhPage } from '../../../homes/admin/home-rh/home-rh';

@IonicPage()
@Component({
  selector: 'page-login-rh',
  templateUrl: 'login-rh.html',
})
export class LoginRhPage {

  nom_rh: string = "";
  pass_rh: string = "";

  constructor(
    private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('LoginRhPage');
  }

  formRh() {
    this.navCtrl.push(AddRhPage);
  }

  login() {
    if(this.nom_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun nom et prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.pass_rh == ""){
      const toast= this.toastCtrl.create({
        message: 'aucun Mot de passe',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        nom_rh: this.nom_rh,
        pass_rh: this.pass_rh,
        action: 'login_rh'
      };

      this.postPvdr.postData(body, 'action.php').subscribe((data) => {
        if(data.success){
          this.storage.set('rh_storage', data.result);
          this.navCtrl.setRoot(HomeRhPage);
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
