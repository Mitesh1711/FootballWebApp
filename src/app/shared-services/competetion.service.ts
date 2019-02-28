import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}

@Injectable({
  providedIn: 'root'
})
export class CompetetionService {

  constructor(private http: HttpClient) { }

  getCompetetions(): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/competitions/";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  getCompetetionById(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/competitions/"+id;
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
