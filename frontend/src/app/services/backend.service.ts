import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
    rootContex:string = 'api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private readonly httpClient: HttpClient) { }

    getVersion():Observable<any> {
        console.log('getVersion');
        return this.httpClient.get(this.rootContex + 'version');
    }

    getOverviewObserver():Observable<any> {
        return this.httpClient.get(this.rootContex + 'overview');
    }

    getComments():Observable<any> {
        return this.httpClient.get(this.rootContex + 'comments');
    }
}
