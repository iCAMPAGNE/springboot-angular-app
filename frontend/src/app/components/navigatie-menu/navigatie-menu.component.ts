import {Component, inject, input, Input, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterLink} from '@angular/router';
import {Version} from "../../models/api.model";
import {NgClass} from "@angular/common";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-navigatie-menu',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navigatie-menu.component.html'
})
export class NavigatieMenuComponent implements OnInit {
  pageSelection = input.required<string>();

  @Input() code: string = '';
  currentPage: string = '';

  version: Version | undefined;


  router: Router = inject(Router);
  backendService: BackendService = inject(BackendService);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('router.event NavigationStart', event.url);
        this.currentPage = event.url;
      }
    });

    this.backendService.getVersion().subscribe({
      next: (result: Version) => {
        this.version = result;
      },
      error: (err: any) => console.log('Retrieving version from backend failed.')
    });
  }

  get privateStatus() {
    return sessionStorage.getItem('private') === 'true' ? 'Logout' : 'Login';
  }
}
