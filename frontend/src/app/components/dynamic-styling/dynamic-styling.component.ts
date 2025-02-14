import { Component } from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
    selector: 'app-dynamic-styling',
    templateUrl: './dynamic-styling.component.html',
    styleUrls: ['./dynamic-styling.component.scss'],
    standalone: false
})
export class DynamicStylingComponent {

  backgroundColor: string = 'lightblue';
  message: string | undefined;
  info: string | undefined;

  inputText: string = 'Initial';

  _inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  message$: Observable<string> | undefined;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];


  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  get inputValue(): string {
    return this._inputValue + '!';
  }
  set inputValue(val: string) {
    this._inputValue = val + '?';
  }

  nummers:number[] = new Array(100).fill(0);

}
