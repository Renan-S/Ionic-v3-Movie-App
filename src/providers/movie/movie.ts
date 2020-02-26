import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiUrl: String = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies () {
    return this.http.get(`${this.baseApiUrl}/movie/popular?api_key=${this.getApiKey()}`);
  }

  getApiKey () {
    return "2e56d66e20f43b7c2b71deb6dfa1d38c"
  }
}
