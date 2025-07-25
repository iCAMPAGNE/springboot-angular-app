import { Component, OnInit } from '@angular/core';
import {Observable, Observer, of, Subject} from "rxjs";
import {FormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {LetDirective} from "@ngrx/component";

@Component({
  selector: 'app-obstest',
  templateUrl: './obstest.component.html',
  imports: [
    FormsModule,
    AsyncPipe,
    LetDirective
  ],
  standalone: true
})
export class ObstestComponent implements OnInit {
  showRightPanel: boolean = false;
  naam: string = 'Frans';
  things$: Observable<string[]> = of(['Jij']);
  private searchTerms = new Subject<string>();


  constructor() { }

  ngOnInit(): void {
    console.log('Start ObstestComponent');
    this.naam = 'Joke';
    this.things$ = of(['Ikke', 'Me']);

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

