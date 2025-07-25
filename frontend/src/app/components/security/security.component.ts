import {Component, inject} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {SecurityService} from "../../services/security.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  imports: [
    FormsModule
  ]
})
export class SecurityComponent {
  title = 'frontend';
  reply = '';
  error = '';

  private backendService: BackendService = inject(BackendService);
  private securityService: SecurityService = inject(SecurityService);

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
        console.log(error);
        this.error = 'ERROR: ' + error.message;
        const winHtml = error.url;//error.text.replace('/springboot-angular-app/login', 'http://localhost:8092/springboot-angular-app/login');
        const winUrl = URL.createObjectURL(
          new Blob([winHtml], { type: "text/html" })
        );
        const win = window.open(
          '/springboot-angular-app/login',
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
