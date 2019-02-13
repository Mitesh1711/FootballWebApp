import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  //@Input() team: any;

  selectedTeam: any;
  matchesObject: any;
  matches: [];

  constructor(private general: GeneralService) {
  }

  teamsObject: any;
  teams: [];

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.general.getTeams().subscribe(data => {
      this.teamsObject = data;
      this.teams = this.teamsObject.teams;

    });
  }

  onSelectTeam(team: any) {
    this.selectedTeam = team;
    this.general.getMatchesByTeam(this.selectedTeam.id).subscribe(data => {
        this.matchesObject = data;
        this.matches = this.matchesObject.matches.reverse();
        console.log(this.selectedTeam);
      }
    );
  }
}
