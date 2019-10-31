import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../../../../providers/post-provider';

@IonicPage()
@Component({
  selector: 'page-fiche-rh',
  templateUrl: 'fiche-rh.html',
})
export class FicheRhPage {

  ressources: any = [];
  id_rh: number;

  constructor(
    private postPvdr: PostProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ressources = [];
    this.id_rh = this.navParams.get('id_rh');
    this.single();
    console.log('FicheRhPage');
  }

  single() {
    let body = {
      id_rh: this.id_rh,
      action: 'fiche_rh'
    };
    this.postPvdr.postData(body, 'action.php').subscribe(data =>{
      for(let user of data.result){
          this.ressources.push(user);
          console.log(data.result)
      }
    });
  }

}
