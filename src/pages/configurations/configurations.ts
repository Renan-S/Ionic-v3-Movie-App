import { AboutPage } from './../about/about';
import { ProfilePage } from '../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configurations.html',
})
export class ConfigurationsPage {
  public rootPage = ProfilePage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationsPage');
  }

  openProfile() {
    this.navCtrl.push(ProfilePage)
  }

  openAbout() {
    this.navCtrl.push(AboutPage)
  }

}
