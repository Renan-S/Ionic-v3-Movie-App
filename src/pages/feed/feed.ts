import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetailMoviePage } from '../detail-movie/detail-movie';

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
  private loading;
  private infiniteScroll;
  public refresher;
  public isRefreshing: boolean = false;
  public page: number = 1;

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.getMovies();
  }

  async presentLoading() {
     this.loading = await this.loadingController.create({
      content: 'Please wait...',
    });
    await this.loading.present();
  }

  async closeLoading() {
     this.loading.dismiss();
  }

  getMovies(newPage: boolean = false) {
    this.presentLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe( 
      (response: any) => {

        if(newPage) {
          this.movieList = this.movieList.concat(response.results);
          this.infiniteScroll.complete();
        } else {
          this.movieList = response.results
        }
        this.closeLoading();

        if(this.isRefreshing) {
          this.refresher.complete() 
          this.isRefreshing=false}
    }, error => {
        console.log(error);
        this.closeLoading();
        if(this.isRefreshing) {
          this.refresher.complete() 
          this.isRefreshing=false}
    })
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.getMovies();
  }

  openDetails(movie) {
    this.navCtrl.push(DetailMoviePage, { id: movie.id })
  }

  loadData(event) {
    this.page++;
    this.infiniteScroll = event;
    this.getMovies(true)
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
