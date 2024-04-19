import { Component } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {SecurityService} from "../../services/security.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  title = 'frontend';
  reply = '';
  error = '';


  constructor(private backendService: BackendService, private securityService: SecurityService) { }

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

  getPublicGreeting() {
    this.reply = '';
    this.error = '';
    this.backendService.getPublicGreeting().subscribe({
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

  getPrivateGreeting() {
    this.reply = '';
    this.error = '';
    this.securityService.getPrivateGreeting().subscribe({
      next: (response: any) => {
        console.log(response);
        this.reply = 'OK: ' + response.result;
      },
      error: error => {
        console.log(error.error.text);
        this.error = 'ERROR: ' + error.message;
        const winHtml = error.error.text.replace('/springboot-angular-app/login', 'http://localhost:8092/springboot-angular-app/login');
        const winUrl = URL.createObjectURL(
          new Blob([winHtml], { type: "text/html" })
        );
        const win = window.open(
          winUrl,
          "win",
          `width=800,height=400,screenX=200,screenY=200`
        );
      }
    });
  }

  getPrivateCallFailing() {
    this.reply = '';
    this.error = '';
    this.securityService.getInfo('admin', 'wrong').subscribe({
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
