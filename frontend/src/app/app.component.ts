import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigatieMenuComponent} from "./components/navigatie-menu/navigatie-menu.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigatieMenuComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'springboot-angular-app';

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }
}
