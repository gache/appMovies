import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie, Result} from "../../interface/movies";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  movies : Result[] = [];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe( resp => {
      console.log(resp);
      this.movies = resp.results;
    });
  }

}
