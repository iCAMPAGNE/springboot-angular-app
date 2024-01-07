import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NavigatieMenuComponent} from "./components/navigatie-menu/navigatie-menu.component";
import {ObstestComponent} from "./components/obstest/obstest.component";
import { MousewheelScrollingComponent } from './components/mousewheel-scrolling/mousewheel-scrolling.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProcessStepsComponent } from './components/process-steps/process-steps.component';
import { ThreeDComponent } from './components/three-d/three-d.component';
import { DynamicStylingComponent } from './components/dynamic-styling/dynamic-styling.component';
import { AttributeDirective } from './directives/attribute.directive';
import { SingleHostElementAttributeDirective } from './directives/single-host-element-attribute.directive';
import { StructuralDirective } from './directives/structural.directive';
import { LetDirective } from "@ngrx/component";
import { SecurityComponent } from './components/security/security.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdesignComponent } from './components/materialdesign/materialdesign.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    NavigatieMenuComponent,
    HomeComponent,
    MaterialdesignComponent,
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
    LetDirective,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [MatSnackBar, NavigatieMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
