import {Component, OnInit} from '@angular/core';
import {TableService} from '../../shared-services/table.service';
import {TeamsService} from '../../shared-services/teams.service';

@Component({
  selector: 'app-league-table-list',
  templateUrl: './league-table-list.component.html',
  styleUrls: ['./league-table-list.component.css']
})
export class LeagueTableListComponent implements OnInit {

  standings: any;
  total: any;
  table: any;

  constructor(private ts: TableService) {
  }

  ngOnInit() {
    this.ts.getLeagueTable().subscribe(data => {
      this.standings = data.standings;
      this.total = this.standings[0];
      this.table = this.total.table;
    });

  }

}
