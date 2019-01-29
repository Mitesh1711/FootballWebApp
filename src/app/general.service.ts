import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeagueTable} from './league-table';


const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  getLeagueTable(): Observable<LeagueTable> {
    var urlPrefix = "http://api.football-data.org/v2/competitions/2021/standings";
    let body = this.http.get<LeagueTable>(urlPrefix, httpOption);

    return body;
  }
}
