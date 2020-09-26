import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/movies';

@Component( {
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css']
} )
export class FilmsPosterGridComponent implements OnInit {

  @Input() movies: Movie[];
  constructor() { }

  ngOnInit (): void {
    console.log( this.movies );

  }

}
