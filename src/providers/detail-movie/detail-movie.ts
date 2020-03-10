import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MovieEnum } from '../../enum/movie.enum';

/*
  Generated class for the DetailMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailMovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DetailMovieProvider Provider');
  }

  getDetailMovie (movieId) {
    console.log("In provider")
    return this.http.get(`${MovieEnum.HOST}/movie/${movieId}?api_key=${MovieEnum.API_KEY}`);
  }
}
