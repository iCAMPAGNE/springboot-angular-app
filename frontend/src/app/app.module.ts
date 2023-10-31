import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import {NavigatieMenuComponent} from "./components/navigatie-menu/navigatie-menu.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import { MousewheelScrollingComponent } from './components/mousewheel-scrolling/mousewheel-scrolling.component';
import {FormsModule} from "@angular/forms";
import { ProcessStepsComponent } from './components/process-steps/process-steps.component';
import {LetModule} from "@ngrx/component";

@NgModule({
  declarations: [
    AppComponent,
    NavigatieMenuComponent,
    HomeComponent,
    OverviewTableComponent,
    ObstestComponent,
    MousewheelScrollingComponent,
    ProcessStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
