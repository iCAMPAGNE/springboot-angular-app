import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Version} from "../../models/api.model";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'navigatie-menu',
  templateUrl: './navigatie-menu.component.html'
})
export class NavigatieMenuComponent implements OnInit {

  @Input() code: string = '';
  currentPage: string = '';

  version: Version | undefined;

  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit(): void {
      this.currentPage = this.router.url.split('/')[1];
    this.backendService.getVersion().subscribe({
      next: (result: Version) => {
        this.version = result;
      },
      error: (err: any) => console.log('Retrieving version from backend failed.')
    });
  }

  get privateStatus() {
    console.log('NavigatieMenuComponent privateStatus is ' + sessionStorage.getItem('private'));
    return sessionStorage.getItem('private') === 'true' ? 'Logout' : 'Login';
  }
}
