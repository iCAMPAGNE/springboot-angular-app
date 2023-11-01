import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OverviewTableComponent} from "./components/overview-table/overview-table.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import {MousewheelScrollingComponent} from "./components/mousewheel-scrolling/mousewheel-scrolling.component";
import {ProcessStepsComponent} from "./components/process-steps/process-steps.component";
import {ThreeDComponent} from "./components/three-d/three-d.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'overview', component: OverviewTableComponent },
    { path: 'observableTest', component: ObstestComponent },
    { path: 'processSteps', component: ProcessStepsComponent },
    { path: 'three-d', component: ThreeDComponent },
    { path: 'mousewheelScrolling', component: MousewheelScrollingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
