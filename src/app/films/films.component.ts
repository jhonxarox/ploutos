import { Component, OnInit } from '@angular/core';

import { Films } from "./films";
import { FilmService } from "./film.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : Films[];

  constructor() { }

  ngOnInit(): void {
  }

}
