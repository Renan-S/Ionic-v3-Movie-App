import { DetailMovieProvider } from './../../providers/detail-movie/detail-movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
  providers: [
    DetailMovieProvider
  ]
})
export class DetailMoviePage {
  public movie;
  public movieId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private detailMovieProvider: DetailMovieProvider) {
  }

  ionViewDidEnter() {
    this.movieId = this.navParams.get("id")
    this.getMovieDetail(this.movieId)
    console.log("After Did Enter", this.movie)
  }

  getMovieDetail(movieId) {
    this.detailMovieProvider.getDetailMovie(movieId).subscribe(
      (response: any) => {
        console.log ("In response",response) 
        this.movie = response
      }, error => {
        console.log(error)
      }
      
    )
  }

}
