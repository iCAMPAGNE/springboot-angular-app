import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Version} from "../../models/api.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  version: Version | undefined ;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
     // this.backendService.getVersion().subscribe((reply: Version) => {
     //      this.version = reply;
     //  });

       this.backendService.getVersion().subscribe({
          next: (result:Version) => {
              console.log('next: result = ', result);
              this.version = result;
          },
          error: (err: any) => console.log('Retrieving version from backend failed.')
      });

      this.backendService.getOverviewObserver().subscribe({
          next(item: string) {
              console.log('Current item: ', item);
          },
          complete() {
              console.log('Completed');
          },
          error(msg: Error) {
              console.log('Error Getting items: ', msg);
          }});
  }

}
