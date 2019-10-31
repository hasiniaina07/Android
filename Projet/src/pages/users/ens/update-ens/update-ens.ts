import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { PostProvider } from '../../../../providers/post-provider';
import { ListEnsPage } from '../list-ens/list-ens';

@IonicPage()
@Component({
  selector: 'page-update-ens',
  templateUrl: 'update-ens.html',
})
export class UpdateEnsPage {

  id_ens: number;
  nom_ens: string;
  naiss_ens: string;
  cin_ens: string;
  adr_ens: string;
  tel_ens: string;
  occup_ens: string;

  constructor(
    private appCtrl: App,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id_ens    = this.navParams.get('id_ens');
    this.nom_ens   = this.navParams.get('nom_ens');
    this.naiss_ens = this.navParams.get('naiss_ens');
    this.cin_ens   = this.navParams.get('cin_ens');
    this.adr_ens   = this.navParams.get('adr_ens');
    this.tel_ens   = this.navParams.get('tel_ens');
    this.occup_ens = this.navParams.get('occup_ens');
    console.log('UpdateEnsPage');
  }

  modifEns() {
    if(this.nom_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun nom et prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.naiss_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucune date de naissance',
        duration: 3000
      });
      toast.present();
    }else if(this.cin_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun CIN',
        duration: 3000
      });
      toast.present();
    }else if(this.adr_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun adresse',
        duration: 3000
      });
      toast.present();
    }else if(this.tel_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun telephone',
        duration: 3000
      });
      toast.present();
    }else if(this.occup_ens == ""){
      const toast = this.toastCtrl.create({
        message: 'Aucun occupation',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        id_ens: this.id_ens,
        nom_ens: this.nom_ens,
        naiss_ens: this.naiss_ens,
        cin_ens: this.cin_ens,
        adr_ens: this.adr_ens,
        tel_ens: this.tel_ens,
        occup_ens: this.occup_ens,
        action: 'update_ens'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(data =>{
        if(data.success){
          this.appCtrl.getRootNav().setRoot(ListEnsPage);
          const toast = this.toastCtrl.create({
          message: 'Modification réussit',
          duration: 3000
        });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: 'Echec de modification',
            duration: 3000
          });
            toast.present();
        }
      });
    }
  }

}
