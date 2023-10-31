import { Component, OnInit } from '@angular/core';
import {Observable, Observer, of} from "rxjs";

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html'
})
export class OverviewTableComponent implements OnInit {
  showRightPanel: boolean = false;

  constructor() { }

  ngOnInit(): void {
      const itemsObservable = new Observable((observer: Observer<string>) => {
          for (let itemNr: number = 1; itemNr <= 10; itemNr++) {
              setTimeout(() => {
                  observer.next('Next ' + itemNr);
                  if (itemNr === 10) {
                      observer.complete();
                  }
                  if (itemNr === Math.floor(Math.random() * 20)) {
                      observer.error('Foutje');
                  }
              }, 1000 * itemNr);
          }
          return {
              unsubscribe() {
                  console.log('unsubscribe Observable');
              }
          };
      });
      const itemsObserver = itemsObservable.subscribe({
          next(item: string) {
              console.log('Current item: ', item);
          },
          complete() {
              console.log('Completed');
          },
          error(msg: Error) {
              console.log('Error Getting items: ', msg);
          }});

      setTimeout(() => {
          itemsObserver.unsubscribe();
      }, 15000);

      const myObservable = of(1, 2, 3);

      // Create observer object
      const myObserver = {
          next: (x: number) => console.log('Observer got a next value: ' + x),
          error: (err: Error) => console.error('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification'),
      };

      // Execute with the observer object
      myObservable.subscribe(myObserver);
  }

}
