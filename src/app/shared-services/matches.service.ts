import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  getMatchesByTeam(id: number): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/teams/"+id+"/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
  getMatchesByCompetetion(id: number): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/"+id+"/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  //List matches across (a set of) competitions.
  getMatchesByToday(): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  //get Match by specific Id
  getMatch(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/matches/"+id;
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
