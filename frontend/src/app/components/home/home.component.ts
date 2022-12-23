import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";

interface AppVersion {
    version: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  version: string = "Loading version";

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
     this.backendService.getVersion().subscribe((reply: AppVersion) => {
          this.version = reply.version;
      });

       this.backendService.getVersion().subscribe({
          next: (result:AppVersion) => {
              console.log('next: result = ', result);
              this.version = result.version;
          },
          error: (err: any) => this.version = 'Retrieving version from backend failed.'
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
