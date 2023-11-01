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
import {LetModule} from "@ngrx/component";
import { ThreeDComponent } from './components/three-d/three-d.component';
import { DynamicStylingComponent } from './components/dynamic-styling/dynamic-styling.component';
import { AttributeDirective } from './directives/attribute.directive';
import { SingleHostElementAttributeDirective } from './directives/single-host-element-attribute.directive';
import { StructuralDirective } from './directives/structural.directive';

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
    StructuralDirective
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
