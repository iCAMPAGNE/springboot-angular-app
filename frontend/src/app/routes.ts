import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import {MousewheelScrollingComponent} from "./components/mousewheel-scrolling/mousewheel-scrolling.component";
import {ProcessStepsComponent} from "./components/process-steps/process-steps.component";
import {ThreeBodyProblemComponent} from "./components/three-body-problem/three-body-problem.component";
import {ThreeDComponent} from "./components/three-d/three-d.component";
import {DynamicStylingComponent} from "./components/dynamic-styling/dynamic-styling.component";
import {SecurityComponent} from "./components/security/security.component";
import {MaterialdesignComponent} from "./components/materialdesign/materialdesign.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, title: 'Home page'},
  {path: 'login', component: LoginComponent},
  {path: 'dynamic-styling', component: DynamicStylingComponent, title: 'Dynamic styling'},
  {path: 'observableTest', component: ObstestComponent},
  {path: 'processSteps', component: ProcessStepsComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'materialdesign', component: MaterialdesignComponent},
  {path: 'three-body-problem', component: ThreeBodyProblemComponent, title: 'Three Body Problem'},
  {path: 'three-d', component: ThreeDComponent},
  {path: 'mousewheelScrolling', component: MousewheelScrollingComponent}
];

export default routes;
