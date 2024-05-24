import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  rootContex: string = 'api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private readonly httpClient: HttpClient) { }

  getPrivateGreeting():Observable<any> {
    return this.httpClient.get(this.rootContex + 'private/greeting');
  }

  getPrivateStatus():Observable<any> {
    return this.httpClient.get(this.rootContex + 'private/status');
  }

  login():Observable<any> {
    return this.httpClient.get(this.rootContex + 'private/login');
  }

  getPrivateLogin(username: string, password: string) {
    return this.httpClient.get(this.rootContex +'private/login',
      { headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      }
    ,responseType: 'blob'}
  );
  }

  doLogin(username: string, password: string):Observable<any> {
    return this.httpClient.get('login',
      { headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
      });
  }

  getPrivateLogout(username: string, password: string):Observable<any> {
    return this.httpClient.get(this.rootContex +'private/logout',
      { headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
      });
  }

  getInfo(name: string, password: string):Observable<any> {
    console.log('getInfo');
    const headers = new HttpHeaders( {
      authorization : 'Basic ' + btoa(name + ':' + password)
    });
    return this.httpClient.get(this.rootContex + 'info', {headers:headers});
  }
}
