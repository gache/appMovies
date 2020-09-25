import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interface/movies";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=4f25a3f3881aaae24ce3c5c273b8795f&language=en-US&page=1';

  constructor(private  http: HttpClient) {

  }

  getMovies():Observable<Movie>{
   return  this.http.get<Movie>(this.url);
  }
}
