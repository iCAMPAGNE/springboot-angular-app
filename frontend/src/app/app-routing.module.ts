import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import {MousewheelScrollingComponent} from "./components/mousewheel-scrolling/mousewheel-scrolling.component";
import {ProcessStepsComponent} from "./components/process-steps/process-steps.component";
import {ThreeDComponent} from "./components/three-d/three-d.component";
import {DynamicStylingComponent} from "./components/dynamic-styling/dynamic-styling.component";
import {SecurityComponent} from "./components/security/security.component";
import {MaterialdesignComponent} from "./components/materialdesign/materialdesign.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'loginPage', component: LoginComponent },
    { path: 'dynamic-styling', component: DynamicStylingComponent },
    { path: 'observableTest', component: ObstestComponent },
    { path: 'processSteps', component: ProcessStepsComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'materialdesign', component: MaterialdesignComponent },
    { path: 'three-d', component: ThreeDComponent },
    { path: 'mousewheelScrolling', component: MousewheelScrollingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
