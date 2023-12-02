import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NavigatieMenuComponent} from "./components/navigatie-menu/navigatie-menu.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import { MousewheelScrollingComponent } from './components/mousewheel-scrolling/mousewheel-scrolling.component';
import {FormsModule} from "@angular/forms";
import { ProcessStepsComponent } from './components/process-steps/process-steps.component';
import { ThreeDComponent } from './components/three-d/three-d.component';
import { DynamicStylingComponent } from './components/dynamic-styling/dynamic-styling.component';
import { AttributeDirective } from './directives/attribute.directive';
import { SingleHostElementAttributeDirective } from './directives/single-host-element-attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { LetDirective } from "@ngrx/component";
import { SecurityComponent } from './components/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatieMenuComponent,
    HomeComponent,
    ObstestComponent,
    MousewheelScrollingComponent,
    ProcessStepsComponent,
    ThreeDComponent,
    DynamicStylingComponent,
    AttributeDirective,
    SingleHostElementAttributeDirective,
    StructuralDirective,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LetDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
