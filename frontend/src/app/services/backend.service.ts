import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProcessStep} from "../models/api.model";

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
        return this.httpClient.get(this.rootContex + 'version');
    }

    getInfo():Observable<any> {
        return this.httpClient.get(this.rootContex + 'info');
    }

    getProcessSteps(): Observable<any> {
        return this.httpClient.get(this.rootContex + 'process-steps');
    }

    getNumberOfProcessSteps(): Observable<number> {
        return this.httpClient.get<number>(this.rootContex + 'process-steps-count');
    }

    storeProcessStep(processStep: ProcessStep): Observable<any> {
        return this.httpClient.post<ProcessStep>(this.rootContex + 'process-step', processStep, this.httpOptions);
    }
}
