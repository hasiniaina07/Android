import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { PostProvider } from '../../../../../providers/post-provider';
import { ListRhPage } from '../list-rh/list-rh';

@IonicPage()
@Component({
  selector: 'page-update-rh',
  templateUrl: 'update-rh.html',
})
export class UpdateRhPage {

  id_rh: number;
  nom_rh: string;
  naiss_rh: string;
  cin_rh: string;
  adr_rh: string;
  tel_rh: string;
  occup_rh: string;

  constructor(
    private postPvdr: PostProvider,
    private appCtrl: App,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.id_rh = this.navParams.get('id_rh');
    this.nom_rh = this.navParams.get('nom_rh');
    this.naiss_rh = this.navParams.get('naiss_rh');
    this.cin_rh = this.navParams.get('cin_rh');
    this.adr_rh = this.navParams.get('adr_rh');
    this.tel_rh = this.navParams.get('tel_rh');
    this.occup_rh = this.navParams.get('occup_rh');
    console.log('UpdateRhPage');
  }

  modifRh() {
    if(this.nom_rh == "") {
      const toast = this.toastCtrl.create({
        message: 'Aucun Nom et Prenom',
        duration: 3000
      });
      toast.present();
    }else if(this.naiss_rh ==""){
      const toast = this.toastCtrl.create({
        message: 'Aucune date de naissance',
        duration: 3000
      });
      toast.present();
    }else if(this.cin_rh ==""){
      const toast = this.toastCtrl.create({
        message: 'Aucun CIN',
        duration: 3000
      });
      toast.present();
    }else if(this.adr_rh ==""){
      const toast = this.toastCtrl.create({
        message: 'Aucun adresse',
        duration: 3000
      });
      toast.present();
    }else if(this.tel_rh ==""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Numero de telephone',
        duration: 3000
      });
      toast.present();
    }else if(this.occup_rh ==""){
      const toast = this.toastCtrl.create({
        message: 'Aucun Occupation',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        id_rh: this.id_rh,
        nom_rh: this.nom_rh,
        naiss_rh: this.naiss_rh,
        cin_rh: this.cin_rh,
        adr_rh: this.adr_rh,
        tel_rh: this.tel_rh,
        occup_rh: this.occup_rh,
        action: 'update_rh'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(data =>{
        if(data.success){
          this.appCtrl.getRootNav().setRoot(ListRhPage);
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
