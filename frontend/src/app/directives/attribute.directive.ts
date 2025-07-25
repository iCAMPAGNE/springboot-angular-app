import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input, OnChanges, OnInit,
  Output,
  SimpleChange
} from '@angular/core';

@Directive({
    selector: '[appAttribute]',
    exportAs: 'exportDirective'
})
export class AttributeDirective implements OnInit, OnChanges {
  private eleRef: ElementRef = inject(ElementRef);

  directiveVariable: string = 'Defined in directive, exposed in template';

  @Input() bgColor: string | undefined;

  @Output('clicked-on-directive-element') // used by custom event
  clickedOnDirectiveElement = new EventEmitter<string>();

  @HostBinding('class')
  hostElementBindingClickClass: string | undefined;

  @Output('host-element-binding-click') // used by custom event
  hostElementBindingClick = new EventEmitter<string>();

  constructor() {
    this.eleRef.nativeElement.style.margin = '1em';
    this.eleRef.nativeElement.style.padding = '1em';
    this.eleRef.nativeElement.style.borderRadius = '0.2em';

    // Binding to a custom event
    this.eleRef.nativeElement.addEventListener('click', (e:any) => {
      console.log('clickedOnDirectiveElement', e);
      this.clickedOnDirectiveElement.emit('clickedOnDirectiveElement emitted');
    })
  }

  ngOnInit(): void {
    console.log(this.bgColor);
    this.eleRef.nativeElement.style.background = this.bgColor;
  }

  ngOnChanges(changes: {[proerty: string]: SimpleChange}) {
    const change = changes["bgColor"];
    if (!change.isFirstChange()) {
      this.eleRef.nativeElement.style.background = this.bgColor;
    }
  }

  @HostListener('click')
  triggerCustomEvent() {
    console.log('hostElementBindingClick');
    this.hostElementBindingClick.emit('hostElementBindingClick emitted');
    this.hostElementBindingClickClass = 'host-binding-class';
  }

}
