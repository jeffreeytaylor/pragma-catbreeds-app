import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatBreed } from '../models/cat-breed.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private readonly API_URL = 'https://api.thecatapi.com/v1/breeds';
  private readonly API_KEY = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<CatBreed[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.API_KEY
    });

    return this.http.get<CatBreed[]>(this.API_URL, { headers });
  }
}
