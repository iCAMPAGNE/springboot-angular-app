import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { OverviewTableComponent } from './overview-table/overview-table.component';
import {NavigatieMenuComponent} from "./navigatie-menu/navigatie-menu.component";
import {ObstestComponent} from "./obstest/obstest.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigatieMenuComponent,
    HomeComponent,
    OverviewTableComponent,
    ObstestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
