import { Injectable } from '@angular/core';
import {AbstractService} from "./abstract.service";
import {FirstService} from "./first.service";

@Injectable({
  providedIn: 'root'
})
export class SecondService extends AbstractService {

  constructor(protected firstService: FirstService) {
    super();
//    this.setUserName('Second Service');
  }

  abstractFunction(): void {
    console.log('abstractFunction in SecondService');
//    this.firstService.finalFunction();
  }
}
