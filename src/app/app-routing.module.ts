import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeagueTable} from './league-table';
import {ResultsComponent} from './results/results.component';
import {LeagueTableComponent} from './league-table/league-table.component';

const routes: Routes = [
  { path: '', component: LeagueTableComponent },
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
