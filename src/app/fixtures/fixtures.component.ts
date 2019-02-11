import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  results: any;
  matches: any;
  status: any;

  constructor(private general: GeneralService) { }

  ngOnInit() {
    this.loadFixtures();
  }

  loadFixtures(){
    this.general.getResults().subscribe(data=>{
      this.results = data;
      this.matches = this.results.matches;
      this.status = this.matches.status;
      //console.log(this.matches);
    })
  }
}
