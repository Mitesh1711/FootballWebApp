import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  constructor(private general: GeneralService) { }

  leagueTable: any ;
  standings: any;
  table: any
  tableData: any;

  ngOnInit() {
    this.loadCompetetionList();
    this.load();
  }

  loadCompetetionList(){
    this.general.getLeagueTable().subscribe( data => {
      console.log(data);
      this.leagueTable = data;
      this.standings = data.standings;
      this.table = this.standings[0];
      this.tableData = this.table.table;

      console.log(this.tableData);
    })
  }
  load(){
   this.general.getResults().subscribe( data => {
      console.log(data);
    })
  }

}
