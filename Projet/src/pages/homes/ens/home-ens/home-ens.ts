import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { PostProvider } from '../../../../providers/post-provider';
import { HomePage } from '../../../home/home';

@IonicPage()
@Component({
  selector: 'page-home-ens',
  templateUrl: 'home-ens.html',
})
export class HomeEnsPage {

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
    this.storage.get('enseignant_storage').then((res) => {
      this.user = res;
      this.load();
      console.log(res);
    });
    console.log('HomeEnsPage');
  }

  profile() {

  }

  load() {
    let body = {
      id_ens: this.user.id_ens,
      action: 'profil_ens'
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
      message: 'Déconnecter',
      duration: 3000
    });
    toast.present();
  }
}
