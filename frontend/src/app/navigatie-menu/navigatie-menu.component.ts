import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigatie-menu',
  templateUrl: './navigatie-menu.component.html'
})
export class NavigatieMenuComponent implements OnInit {

  @Input() code: string = '';
  currentPage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
