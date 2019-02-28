import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TeamsService} from '../../../shared-services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  id: any;
  constructor(private route: ActivatedRoute,
              private ts: TeamsService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = params['id'];
    })
    this.ts.getTeam(this.id).subscribe(data => {
      this.team = data;
    })
  }

}
