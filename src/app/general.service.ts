import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeagueTable} from './league-table';
import {Results} from './results';
import {Teams} from './teams/teams';


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
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/standings";
    let body = this.http.get<LeagueTable>(urlPrefix, httpOption);

    return body;
  }
  getResults(): Observable<Results> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/matches";
    let body = this.http.get<Results>(urlPrefix, httpOption);

    return body;
  }
  getTeams(): Observable<Teams> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/teams";
    let body = this.http.get<Teams>(urlPrefix, httpOption);

    return body;
  }
}
