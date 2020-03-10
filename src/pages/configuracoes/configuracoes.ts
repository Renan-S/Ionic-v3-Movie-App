import { ConfiguracoesPage } from './configuracoes';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { destroyView } from '@angular/core/src/view/view';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  public rootPage = PerfilPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  openProfile() {
    this.navCtrl.push(PerfilPage)
  }

  openAbout() {
    this.navCtrl.push(SobrePage)
  }

  closeMenu() {
    this.navCtrl.pop()
  }

}
