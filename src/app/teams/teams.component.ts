import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private general: GeneralService) { }

  teamsObject: any;
  teams:[];

  ngOnInit() {
    this.loadteams();
  }

  loadteams(){
    this.general.getTeams().subscribe( data => {
      this.teamsObject = data;
      this.teams = this.teamsObject.teams;
      console.log(this.teams);
    })
  }
}
