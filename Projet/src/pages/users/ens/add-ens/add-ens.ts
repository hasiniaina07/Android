import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { PostProvider } from '../../../../providers/post-provider';
import { LoginEnsPage } from '../../../logins/ens/login-ens/login-ens';

@IonicPage()
@Component({
  selector: 'page-add-ens',
  templateUrl: 'add-ens.html',
})
export class AddEnsPage {

  nom_ens: string = "";
  naiss_ens: string = "";
  cin_ens: string = "";
  adr_ens: string = "";
  tel_ens: string = "";
  occup_ens: string = "";
  pass_ens: string = "";
  confirm_pass: string = "";

  constructor(
    private appCtrl: App,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('AddEnsPage');
  }

  addEns() {
    if(this.nom_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun Nom et Prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.naiss_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucune Date de naissance',
        duration: 3000
      });
      toast.present();
    }else if(this.cin_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun CIN',
        duration: 3000
      });
      toast.present();
    }else if(this.adr_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun adresse',
        duration: 3000
      });
      toast.present();
    }else if(this.tel_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun Numero de telephone',
        duration: 3000
      });
      toast.present();
    }else if(this.occup_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun Occupation',
        duration: 3000
      });
      toast.present();
    }else if(this.pass_ens == ""){
      const toast = this.toastCtrl.create({
        message:'Aucun Mot de passe',
        duration: 3000
      });
      toast.present();
    }else if(this.confirm_pass != this.pass_ens){
      const toast = this.toastCtrl.create({
        message:'Mot de passe ne correspond pas',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        nom_ens: this.nom_ens,
        naiss_ens: this.naiss_ens,
        cin_ens: this.cin_ens,
        adr_ens: this.adr_ens,
        tel_ens: this.tel_ens,
        occup_ens: this.occup_ens,
        pass_ens: this.pass_ens,
        action: 'Add_ens'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(data =>{
        if(data.success){
          this.appCtrl.getRootNav().setRoot(LoginEnsPage);
          const toast = this.toastCtrl.create({
          message: 'Enregistré avec succès',
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
