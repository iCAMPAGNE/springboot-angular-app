import { Component } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  title = 'frontend';
  reply = '';
  error = '';


  constructor(private backendService: BackendService, private adminService: AdminService) { }

  getPublicCall() {
    this.reply = '';
    this.error = '';
    this.backendService.getInfo().subscribe({
      next: (response: any) => {
        console.log(response);
        this.reply = 'OK: ' + response.info;
      },
      error: error => {
        console.log(error);
        this.error = 'ERROR: ' + error.message;
      }
    });
  }

  getPrivateCall() {
    this.reply = '';
    this.error = '';
    this.adminService.getInfo('admin', 'admin').subscribe({
      next: (response: any) => {
        console.log(response);
        this.reply = 'OK: ' + response.info;
      },
      error: error => {
        console.log(error);
        this.error = error.message;
      }
    });
  }

  getPrivateCallFailing() {
    this.reply = '';
    this.error = '';
    this.adminService.getInfo('admin', 'wrong').subscribe({
      next: (response: any) => {
        console.log(response);
        this.reply = 'OK: ' + response.result;
      },
      error: error => {
        console.log(error);
        this.error = 'ERROR: ' + error.message;
      }
    });
  }

}
