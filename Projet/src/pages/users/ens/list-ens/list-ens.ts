import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { PostProvider } from '../../../../providers/post-provider';
import { FicheEnsPage } from '../fiche-ens/fiche-ens';
import { UpdateEnsPage } from '../update-ens/update-ens';

@IonicPage()
@Component({
  selector: 'page-list-ens',
  templateUrl: 'list-ens.html',
})
export class ListEnsPage {

  enseignants: any = [];

  constructor(
    private appCtrl: App,
    private postPvdr: PostProvider,
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.enseignants = [];
    this.loadEns();
    console.log('ListEnsPage');
  }

  loadEns() {
    let body = {
      action: 'list_ens'
      };

      this.postPvdr.postData(body, 'action.php').subscribe(data =>{
        for(let user of data.result){
            this.enseignants.push(user);
            console.log(data.result);
        }
      });
  }

  fiche(id_ens) {
    this.navCtrl.push(FicheEnsPage, {
      'id_ens': id_ens,
    })
    console.log(id_ens)
  }

  modifEns(id_ens, nom_ens, naiss_ens, cin_ens, adr_ens, tel_ens, occup_ens) {
    this.navCtrl.push(UpdateEnsPage, {
      'id_ens': id_ens,
      'nom_ens': nom_ens,
      'naiss_ens': naiss_ens,
      'cin_ens': cin_ens,
      'adr_ens': adr_ens,
      'tel_ens': tel_ens,
      'occup_ens': occup_ens,
    });
    console.log(id_ens)
  }

  delEns(id_ens) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Effacer cet enseignant?',
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
              id_ens: id_ens,
              action: 'del_ens'
            };

            this.postPvdr.postData(body, 'action.php').subscribe(data =>{
              this.appCtrl.getRootNav().setRoot(ListEnsPage);
            });
          }
        }
      ]
    });
    alert.present();
  }
}
