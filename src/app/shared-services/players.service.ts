import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers : new HttpHeaders({'X-Auth-Token': '62121c4f783e487fbc0785830af63bf4'})
}

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  //List one particular player.
  getPlayerById(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/players/"+id;
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }

  //Show all matches for a particular player.

  getMatchesForPlayer(id: number): Observable<any>{
    var urlPrefix = "https://api.football-data.org/v2/players/"+id+"/matches";
    let body = this.http.get<any>(urlPrefix, httpOption);

    return body;
  }
}
