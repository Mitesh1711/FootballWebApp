import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  //List all available areas.
  getAreas(): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/areas/";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  //List one particular area.
  getAreaById(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/areas/"+id;
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
