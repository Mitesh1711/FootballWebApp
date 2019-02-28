import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import {GeneralService} from './general.service';
import {HttpClientModule} from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { TeamsComponent } from './teams/teams.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LeagueTableListComponent } from './league-table/league-table-list/league-table-list.component';
import { LeagueTableItemComponent } from './league-table/league-table-list/league-table-item/league-table-item.component';
import { LeagueTableDetailComponent } from './league-table/league-table-detail/league-table-detail.component';
import { FixtureListComponent } from './fixtures/fixture-list/fixture-list.component';
import { FixtureComponent } from './fixtures/fixture-list/fixture/fixture.component';
import { FixtureDetailComponent } from './fixtures/fixture-detail/fixture-detail.component';
import { ResultListComponent } from './results/result-list/result-list.component';
import { ResultItemComponent } from './results/result-list/result-item/result-item.component';
import { ResultDetailComponent } from './results/result-detail/result-detail.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamComponent } from './teams/team-list/team/team.component';
import { TeamDetailComponent } from './teams/team-list/team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent,
    ResultsComponent,
    TeamsComponent,
    FixturesComponent,
    LeagueTableListComponent,
    LeagueTableItemComponent,
    LeagueTableDetailComponent,
    FixtureListComponent,
    FixtureComponent,
    FixtureDetailComponent,
    ResultListComponent,
    ResultItemComponent,
    ResultDetailComponent,
    TeamListComponent,
    TeamComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
