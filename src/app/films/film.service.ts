import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Films} from "./films";
import {Film} from "./film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private filmsUrl = 'https://swapi.dev/api/films';

  constructor(
    private http: HttpClient
  ) { }

  getFilms(): Observable<Films[]> {
    return this.http.get<any[]>(this.filmsUrl);
  }
}
