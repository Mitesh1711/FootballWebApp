import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from './results/results.component';
import {LeagueTableComponent} from './league-table/league-table.component';
import {TeamsComponent} from './teams/teams.component';
import {FixturesComponent} from './fixtures/fixtures.component';

const routes: Routes = [
  { path: '', component: LeagueTableComponent },
  { path: 'results', component: ResultsComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'fixtures', component: FixturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
