import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RaceListService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getRaces(): Observable<any> {
    return this.http.get(this.url + '/race-list')
  }
}
