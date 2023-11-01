import { Injectable } from '@angular/core';
import {AbstractService} from "./abstract.service";
//import {SecondService} from "./second.service";

@Injectable({
  providedIn: 'root'
})
export class FirstService extends AbstractService {

 // constructor(protected secondService: SecondService) {
 //   super();
 //   this.setUserName('First Service');
 // }

  abstractFunction(): void {
    console.log('abstractFunction in FirstService');
//    this.secondService.finalFunction();
  }
}
