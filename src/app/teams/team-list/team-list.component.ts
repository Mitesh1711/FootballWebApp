import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../shared-services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: any;

  constructor(private ts: TeamsService) { }

  ngOnInit() {
    this.ts.getTeams().subscribe(data=> {
      this.teams = data.teams;
    })
  }

}
