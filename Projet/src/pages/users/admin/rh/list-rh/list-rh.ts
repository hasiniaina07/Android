import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { PostProvider } from '../../../../../providers/post-provider';
import { UpdateRhPage } from '../update-rh/update-rh';
import { FicheRhPage } from '../fiche-rh/fiche-rh';

@IonicPage()
@Component({
  selector: 'page-list-rh',
  templateUrl: 'list-rh.html',
})
export class ListRhPage {

  ressources: any = [];

  constructor(
    private postPvdr: PostProvider,
    private appCtrl: App,
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ressources = [];
    this.loadRh();
    console.log('ListRhPage');
  }

  loadRh() {
    let body = {
      action: 'list_rh'
    };

    this.postPvdr.postData(body, 'action.php').subscribe(data =>{
      for(let user of data.result){
          this.ressources.push(user);
      }
    });
  }

  fiche(id_rh) {
    this.navCtrl.push(FicheRhPage, {
      'id_rh': id_rh,
    })
    console.log(id_rh)
  }

  modifRh(id_rh, nom_rh, naiss_rh, cin_rh, adr_rh, tel_rh, occup_rh) {
    this.navCtrl.push(UpdateRhPage, {
      'id_rh': id_rh,
      'nom_rh': nom_rh,
      'naiss_rh': naiss_rh,
      'cin_rh': cin_rh,
      'adr_rh': adr_rh,
      'tel_rh': tel_rh,
      'occup_rh': occup_rh
    });
    console.log(id_rh)
  }

  delRh(id_rh) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Effacer ce membre?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'effacer',
          handler: () => {
            let body = {
              id_rh: id_rh,
              action: 'del_rh'
            };

            this.postPvdr.postData(body, 'action.php').subscribe(data =>{
              this.appCtrl.getRootNav().setRoot(ListRhPage);
            });
          }
        }
      ]
    });
    alert.present();
  }

}
