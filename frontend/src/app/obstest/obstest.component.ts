import { Component, OnInit } from '@angular/core';
import {Observable, of, Subject} from "rxjs/index";

@Component({
  selector: 'app-obstest',
  templateUrl: './obstest.component.html',
  styleUrls: ['./obstest.component.scss']
})
export class ObstestComponent implements OnInit {
  naam: string = 'Frans';
    things$: Observable<string[]> = of(['Jij']);
    private searchTerms = new Subject<string>();


    constructor() { }

  ngOnInit(): void {
    console.log('Start ObstestComponent');
    this.naam = 'Joke';
      this.things$ = of(['Ikke', 'Me']);
  }

}
