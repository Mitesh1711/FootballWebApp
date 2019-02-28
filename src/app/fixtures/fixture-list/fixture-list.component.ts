import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../../shared-services/matches.service';

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {

  matches: any;
  constructor(private ms: MatchesService) { }

  ngOnInit() {
    this.ms.getMatches().subscribe(data => {
      this.matches = data.matches;
      console.log(this.matches);
    })
  }

}
