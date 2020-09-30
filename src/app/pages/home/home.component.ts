import { Component, HostListener, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie, Result } from "../../interface/movies";

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public movies: Result[] = [];
  @HostListener( 'window:scroll', ['$event'] )

  onScrolle () {
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop );
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    if ( pos > max ) {

    }

    console.log( pos );
    console.log( max );


  }
  constructor( private movieService: MovieService ) { }

  ngOnInit (): void {
    this.movieService.getMovies().subscribe( resp => {
      console.log( resp );
      this.movies = resp.results;
    } );
  }

}
