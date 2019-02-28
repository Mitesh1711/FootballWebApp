import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  //for id = 2021 premier league 2018/2019
  getLeagueTable(): Observable<any> {
    const urlPrefix = 'https://api.football-data.org/v2/competitions/2021/standings';
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  getLeagueTableByCompetetion(id: number): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/"+id+"/standings";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
