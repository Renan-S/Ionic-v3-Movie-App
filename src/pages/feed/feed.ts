import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})

//const newDate: Date = new Date();
export class FeedPage {
  private newDate: Date = new Date();
  public movieList = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    //Subscribe is an observable function. If the return is successful then data is runned.
    this.movieProvider.getLatestMovies().subscribe( 
      data => {
        const response = (data as any); //Cast to have access to the _body
        const returnObj = JSON.parse(response._body); //Angular transforms to text, them you have to parse to JSON
        this.movieList = returnObj.results
        console.log(data); //Pure object return from the API
        console.log(returnObj); //JSON parsed object after Cast and observing the _body
    }, error => {
        console.log(error);
    })
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
