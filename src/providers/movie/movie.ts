import { MovieEnum } from './../../enum/movie.enum';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies () {
    return this.http.get(`${MovieEnum.HOST}/movie/popular?api_key=${MovieEnum.API_KEY}`);
  }
}
