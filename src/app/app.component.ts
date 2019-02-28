import {Component, OnInit} from '@angular/core';
import {CompetetionService} from './shared-services/competetion.service';
import {MatchesService} from './shared-services/matches.service';
import {PlayersService} from './shared-services/players.service';
import {TableService} from './shared-services/table.service';
import {TeamsService} from './shared-services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = true;

  constructor(private cs: CompetetionService,
              private ms: MatchesService,
              private ps: PlayersService,
              private ts: TableService,
              private teamService: TeamsService){

  }

  ngOnInit(){
    /*this.cs.getCompetetions().subscribe(data => console.log(data));
    this.teamService.getTeamsByCompetetion(2021).subscribe(data => console.log(data));
    this.ts.getLeagueTableByCompetetion(2021).subscribe(data => console.log(data));
    this.ms.getMatch(204950).subscribe(data => console.log(data));*/
  }

}
