import {AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-mousewheel-scrolling',
    templateUrl: './mousewheel-scrolling.component.html',
    standalone: false
})
export class MousewheelScrollingComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('timeSpan') timeSpan: ElementRef<HTMLInputElement> | undefined;

  minutes: number[] = [];
  minuteWidth: number = 50;
  zoomFactor: number = 5;
  factor: number = 0;
  scrollLeft: number = 0;
  currentMinuteWidth: number = this.minuteWidth;
  cursorX: number = 0;
  printNr: number = 10;

  ships: any = [];

  ngOnInit(): void {
    this.minutes =
        [...[...Array.from(Array(23).keys())].map(i => i+1), ...Array.from(Array(24).keys()), ...Array.from(Array(24).keys()), ...Array.from(Array(2).keys())]
    this.ships =
        [{pos: {x: 60, y:0}, length: 2}, {pos: {x: 59, y:25}, length: 0.5}, {pos: {x: 57, y:0}, length: 1.5}, {pos: {x: 50, y:75}, length: 4}];
  }

  ngAfterViewInit(): void {
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      timeSpanElement.scrollTo(36 * this.minuteWidth - timeSpanElement.clientWidth / 2, 0);
      this.scrollLeft = timeSpanElement.scrollLeft;
      this.printValues();
    }
  }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.cursorX = event.clientX
    this.currentMinuteWidth = this.minuteWidth;
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      this.scrollLeft = timeSpanElement.scrollLeft;

      if (event.deltaY > 0 && this.minuteWidth > this.zoomFactor) {
        this.minuteWidth -= this.zoomFactor;
        this.factor = -this.zoomFactor;
      }
      if (event.deltaY < 0) {
        this.minuteWidth += this.zoomFactor;
        this.factor = this.zoomFactor;
      }

      this.printValues(event);

      // Positie van scrollbar moet gewijzigd worden gebaseerd op wijziging van minuteWidth en positie van de (muis) cursor.
      // De positie (scrollTo) geeft de linker kant aan van het te tonen gedeelte van het minutes-frame. Dit wordt als volgt berekend:
      // event.clientX is de absolute positie van de muis-cursor. Om de gewenste positie van minutes-frame te bepalen moet de left-margin van timeSpan
      // afgetrokken worden van event.clientX, en de breedte van timeSpan opgeteld worden.
      // Omdat zojuist de breedte van de minuut (minuteWidth) is vergroot met factor factor moet het resultaat hierboven vermenigvuldigd worden met factor.
      const scrollTo: number = this.scrollLeft + this.factor * (this.cursorX - timeSpanElement.offsetLeft + this.scrollLeft) / this.currentMinuteWidth;
//      timeSpanElement.scrollTo(scrollTo,0);
      console.log('scrollTo='+scrollTo + ', '+(event.clientX - timeSpanElement.offsetLeft + this.scrollLeft)/ this.currentMinuteWidth);
      console.log(this.scrollLeft, this.factor, event.clientX, timeSpanElement.offsetLeft, this.currentMinuteWidth); // 1300 5 1056 58 50

      // setTimeout(() => {
      //   this.printValues(event);
      //   if (this.timeSpan && this.timeSpan.nativeElement) {
      //     const timeSpanElement = this.timeSpan.nativeElement;
      //     timeSpanElement.scrollTo(scrollTo , 0);
      //
      //     this.printValues(event, scrollTo);
      //   }
      // }, 1000);
    }
  }

  printValues(event?: WheelEvent, scrollTo?: number) {
    if (this.printNr++ % 10 == 1) {
      console.log('                      offset\tclient\tclient\tminute\t\tscroll\tscroll\t');
      console.log('             nr zoom  left\tLeft\tWidth\twidth\tmouse\tLeft\twidth\tscrollTo');
    }
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      console.log(this.toonTijdstip()
          + this.printNr + ' ' + (event ? event.deltaY < 0 ? ' in   ' : ' out  ' : '      ')
          + '\t' + timeSpanElement.offsetLeft + ' '
          + '\t' + timeSpanElement.clientLeft + ' '
          + '\t' + timeSpanElement.clientWidth
          + '\t' + this.minuteWidth
          + '\t' + (event ? event.clientX : '')
          + '\t' + timeSpanElement.scrollLeft
          + '\t' + timeSpanElement.scrollWidth
          + '\t' + (scrollTo ? scrollTo : '')
          + '\t'
      );
    }
  }

  toonTijdstip() {
    const now = new Date();
    const msec = now.getUTCMilliseconds()
    return now.toTimeString().substring(0,8) + '.' + (msec < 10 ? '00' : msec < 100 ? '0' : '') + msec + ' ';
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterViewChecked(): void {
    // Deze method wordt 1 msec aangeroepen nadat de view is gewijzigd. Dat is snel genoeg om het verspringen te voorkomen.
    // Een alternatief, het gebruik van setTimeout, duurt ca 7 msec en dat is genoeg om de balk te zien verspringen.

    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      const scrollTo: number = this.scrollLeft + this.factor * (this.cursorX - timeSpanElement.offsetLeft + this.scrollLeft) / this.currentMinuteWidth;
      timeSpanElement.scrollTo(scrollTo, 0);
      console.log('ngAfterViewChecked scrollTo + ', scrollTo);
    }
    this.printValues();
  }
}
