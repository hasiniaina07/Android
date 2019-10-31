import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../../providers/post-provider';

import { HomePage } from '../../../home/home';
import { ListRhPage } from '../../../users/admin/rh/list-rh/list-rh';
import { ListEnsPage } from '../../../users/ens/list-ens/list-ens';

@IonicPage()
@Component({
  selector: 'page-home-rh',
  templateUrl: 'home-rh.html',
})
export class HomeRhPage {

  user: any;
  members:any;

  constructor(
    private postPvdr: PostProvider,
    private appCtrl: App,
    private storage: Storage,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.storage.get('rh_storage').then((res) => {
      this.user = res;
      this.load();
      console.log(res);
    });
    console.log('HomeRhPage');
  }

  listRh() {
    this.navCtrl.push(ListRhPage);
  }

  listEns() {
    this.navCtrl.push(ListEnsPage)
  }

  load() {
    let body = {
      id_rh: this.user.id_rh,
      action: 'profil_rh'
    };

    this.postPvdr.postData(body, 'action.php').subscribe(data => {
      this.members = data.profiles;
      console.log(data.profiles);
    });
  }

  logout() {
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(HomePage);
    const toast = this.toastCtrl.create({
      message: 'Deconnexion réussit',
      duration: 3000
    });
    toast.present();
  }

}
