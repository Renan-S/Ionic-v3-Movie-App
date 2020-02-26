import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-card',
  templateUrl: 'my-card.html',
})
export class MyCardPage {
  private newDate: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCardPage');
  }

  public card: object = {
    id: 1,
    username: "Renan Cavalcante",
    feedDate: "February 19, 1990",
    description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    likeCount: 30,
    commentCount: 69,
    postDate: `${this.newDate.getDate()}/0${this.newDate.getMonth()+1}/${this.newDate.getFullYear()}`
  }

}
