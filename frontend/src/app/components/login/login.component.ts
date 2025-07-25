import {Component, inject} from '@angular/core';
import { SecurityService } from '../../services/security.service';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error = '';

  private router: Router = inject(Router);
  private securityServer: SecurityService = inject(SecurityService);

  constructor() {
    sessionStorage.setItem('private', 'false');
  }

  submit() {
    this.error = '';
    console.log(this.username + '/' + this.password);
    this.securityServer.getPrivateLogin(this.username, this.password).subscribe( {
      next: (result) => {
        console.log('Logged in');
        sessionStorage.setItem('private', 'true');
        this.router.navigate(['security']);
      },
      error: (error) => {
        console.log(error.status);
        switch (error.status) {
          case 401:
            this.error = `Login failed, invalid combination of username and password:<br>${error.statusText}`;
            break;
          case 504:
            this.error = `Login failed, server unavailable:<br>${error.error}`;
            break;
          default:
            this.error = `An unknown error with status ${error.status} did occur:<br>${error.error}`;
        }
        console.log('Login failed', error);
        sessionStorage.setItem('private', 'false');
      }
    })
  }
}
