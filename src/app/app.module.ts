import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import {GeneralService} from './general.service';
import {HttpClientModule} from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
