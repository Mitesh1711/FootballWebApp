import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  getLeagueTable(): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/standings";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
  getResults(): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
  getTeams(): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/teams";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
  getMatchesByTeam(id: number): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/teams/"+id+"/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
