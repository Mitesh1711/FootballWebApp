import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  //@Output() selectedTeam = new EventEmitter<any>();

  ngOnInit() {
    //this.loadCompetitionList();
  }

  loadCompetitionList(){
    this.general.getLeagueTable().subscribe( data => {
      this.leagueTable = data;
      this.standings = data.standings;
      this.table = this.standings[0];
      this.tableData = this.table.table;
    })
  }
  /*onClickTeamName(team:any){
    this.selectedTeam.emit(team);
    console.log(team);
  }*/
}
