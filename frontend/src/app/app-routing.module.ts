import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OverviewTableComponent} from "./overview-table/overview-table.component";
import {ObstestComponent} from "./obstest/obstest.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'overview', component: OverviewTableComponent },
    { path: 'observableTest', component: ObstestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
