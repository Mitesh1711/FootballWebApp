import {Component, Input, OnInit} from '@angular/core';
import {TeamsService} from '../../../shared-services/teams.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-league-table-item',
  templateUrl: './league-table-item.component.html',
  styleUrls: ['./league-table-item.component.css']
})
export class LeagueTableItemComponent implements OnInit {

  @Input() leagueTableItem: any;
  teamName: any;



  constructor(private teamService: TeamsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // to get the short name of team
    /*this.teamService.getTeam(this.leagueTableItem.team.id).subscribe(data => {
      this.teamName = data.shortName;
    })*/
  }
  onSelectTeam(id){
    this.router.navigate(['../teams', id],{relativeTo: this.route })
  }

}
