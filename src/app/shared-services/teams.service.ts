import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  //for id =  2021 premier league 2018/2019
  getTeams(): Observable<any> {
    var urlPrefix = "https://api.football-data.org/v2/competitions/2021/teams";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  getTeamsByCompetetion(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/competitions/"+id+"/teams";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  //Get team by Id
  getTeam(id: number): Observable<any>{
    let urlPrefix = "https://api.football-data.org/v2/teams/"+id;
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
