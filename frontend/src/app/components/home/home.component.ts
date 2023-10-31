import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.getOverviewObserver().subscribe({
      next(item: string) {
        console.log('Current item: ', item);
      },
      complete() {
        console.log('Completed');
      },
      error(msg: Error) {
        console.log('Error Getting items: ', msg);
      }
    });
  }

}
