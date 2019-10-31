import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../../../providers/post-provider';

@IonicPage()
@Component({
  selector: 'page-fiche-ens',
  templateUrl: 'fiche-ens.html',
})
export class FicheEnsPage {

  enseignants: any = [];
  id_ens: number;

  constructor(
    private postPvdr: PostProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.enseignants = [];
    this.id_ens = this.navParams.get('id_ens');
    this.single();
    console.log('FicheEnsPage');
  }

  single() {
    let body = {
      id_ens: this.id_ens,
      action: 'fiche_ens'
    };

    this.postPvdr.postData(body, 'action.php').subscribe(data =>{
      for(let user of data.result){
          this.enseignants.push(user);
          console.log(data.result)
      }
    });
  }
}
