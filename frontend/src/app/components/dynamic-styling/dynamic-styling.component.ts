import {Component} from '@angular/core';
import {interval, Observable} from "rxjs";
import {map, take} from "rxjs/operators";
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AttributeDirective} from "../../directives/attribute.directive";
import {StructuralDirective} from "../../directives/structural.directive";

@Component({
  selector: 'app-dynamic-styling',
  templateUrl: './dynamic-styling.component.html',
  imports: [
    AsyncPipe,
    FormsModule,
    AttributeDirective,
    StructuralDirective
  ],
  styleUrls: ['./dynamic-styling.component.scss']
})
export class DynamicStylingComponent {

  backgroundColor: string = 'lightblue';
  message: string | undefined;
  info: string | undefined;

  inputText: string = 'Initial';

  _inputValue: string = '';

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
