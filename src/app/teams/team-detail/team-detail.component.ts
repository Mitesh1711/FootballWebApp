import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeneralService} from '../../general.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  @Input() matches: any;
  @Input() team: any;

  constructor() {
  }

  ngOnInit() {

  }

}
