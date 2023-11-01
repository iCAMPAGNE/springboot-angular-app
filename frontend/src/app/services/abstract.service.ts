import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  userName: string = 'unknown';

  protected constructor() { }

  setUserName(name: string) {
    this.userName = name;
  }

  functionInAbstractService() {
    console.log('AbstractService');
    this.abstractFunction();
  }

  abstract abstractFunction(): void;

  finalFunction() {
    console.log('finalFunction called by ' + this.userName);
  }
}
