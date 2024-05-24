import { Component } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error = '';

  constructor(private router: Router, private securityServer: SecurityService) {
    console.log('LoginComponent constructor private is ' + sessionStorage.getItem('private'));
    // if (sessionStorage.getItem('private') === 'true') {
    //   this.securityServer.getPrivateLogout('private', 'Private*007').subscribe({
    //     next: reply => {
    //       sessionStorage.setItem('private', 'false');
    //       console.log('LoginComponent constructor logged out ');
    //     }
    //   })
    // }
  }

  login() {
    this.error = '';
    this.securityServer.login().subscribe( {
      next: (result) => {
        console.log('LoginComponent login Logged in', result);
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
//        sessionStorage.setItem('private', 'false');
      }
    })
  }

  submit() {
    this.error = '';
    this.securityServer.doLogin('private', 'Private*007').subscribe( {
      next: (result) => {
        console.log('LoginComponent submit Logged in', result);
        sessionStorage.setItem('private', 'true');
//        this.router.navigate(['security']);
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
