import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: any;
  matches: any;
  status: any;

  constructor( private general: GeneralService) { }

  ngOnInit() {
    this.loadResults();
  }

  loadResults(){
    this.general.getResults().subscribe( data => {
      this.results = data;
      this.matches = this.results.matches;
      this.status = this.matches.status;
      //console.log(this.date = this.matches.utcDate);
    })
    }
}
