import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  rootContex:string = 'api/admin/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private readonly httpClient: HttpClient) { }

  getInfo(name: string, password: string):Observable<any> {
    console.log('getInfo');
    const headers = new HttpHeaders( {
      authorization : 'Basic ' + btoa(name + ':' + password)
    });
    return this.httpClient.get(this.rootContex + 'info', {headers:headers});
  }
}
