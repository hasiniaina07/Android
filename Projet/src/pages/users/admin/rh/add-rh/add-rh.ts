import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { PostProvider } from '../../../../../providers/post-provider';
import { LoginRhPage } from '../../../../logins/admin/login-rh/login-rh';

@IonicPage()
@Component({
  selector: 'page-add-rh',
  templateUrl: 'add-rh.html',
})
export class AddRhPage {

  nom_rh: string = "";
  naiss_rh: string = "";
  cin_rh: string = "";
  adr_rh: string = "";
  tel_rh: string = "";
  occup_rh: string = "";
  pass_rh: string = "";
  conf_pass: string = "";

  constructor(
    private appCtrl: App,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('AddRhPage');
  }

  addRh() {
    if(this.nom_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Nom et Prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.naiss_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucune Date de naissance',
        duration: 3000
      });
      toast.present();
    }else if(this.cin_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun CIN',
        duration: 3000
      });
      toast.present();
    }else if(this.adr_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucune Adresse',
        duration: 3000
      });
      toast.present();
    }else if(this.tel_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Numero de telephone',
        duration: 3000
      });
      toast.present();
    }else if(this.occup_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Occupation',
        duration: 3000
      });
      toast.present();
    }else if(this.pass_rh == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Mot de passe',
        duration: 3000
      });
      toast.present();
    }else if(this.pass_rh != this.conf_pass){
      const toast = this.toastCtrl.create({
        message: 'Mot de passe invalide',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        nom_rh: this.nom_rh,
        naiss_rh: this.naiss_rh,
        cin_rh: this.cin_rh,
        adr_rh: this.adr_rh,
        tel_rh: this.tel_rh,
        occup_rh: this.occup_rh,
        pass_rh: this.pass_rh,
        action: 'add_rh'
      };

      this.postPvdr.postData(body, 'action.php').subscribe(data =>{
        if(data.success){
          this.appCtrl.getRootNav().setRoot(LoginRhPage);
          const toast = this.toastCtrl.create({
          message: 'Enregister avec succès',
          duration: 3000
        });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: 'Echec',
            duration: 3000
          });
            toast.present();
        }
      });
    }
  }

}
