import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../../shared-services/matches.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  matches: any;

  constructor(private rs: MatchesService) { }

  ngOnInit() {
    this.rs.getMatches().subscribe(data => {
      this.matches = data.matches.reverse();
      console.log(this.matches);
    })
  }

}
