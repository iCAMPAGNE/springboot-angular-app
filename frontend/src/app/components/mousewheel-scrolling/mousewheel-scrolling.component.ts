import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mousewheel-scrolling',
  templateUrl: './mousewheel-scrolling.component.html'
})
export class MousewheelScrollingComponent implements OnInit, AfterViewInit {

  @ViewChild('timeSpan') timeSpan: ElementRef<HTMLInputElement> | undefined;

  zoomFactor: number = 5;
  clientMiddle: number = 0;

  marginLeft: number = 0;
  minutes: number[] = Array.from(Array(100).keys());
  minuteWidth: number = 25;
  scrollLeft: number = 0;
  printNr: number = 0;

  ships = [{pos: {x: 80, y:0}, length: 2}, {pos: {x: 79, y:25}, length: 0.5}, {pos: {x: 77, y:0}, length: 1.5}, {pos: {x: 70, y:75}, length: 4}];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      this.clientMiddle = timeSpanElement.clientWidth / 2;
      this.marginLeft = timeSpanElement.offsetLeft;
      timeSpanElement.scrollLeft = 75 * this.minuteWidth - timeSpanElement.clientWidth / 2;
      this.printValues();
    }
  }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.printValues(event);
    const currentMinuteWidth = this.minuteWidth;
    let factor = 0;
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      this.scrollLeft = timeSpanElement.scrollLeft;

      if (event.deltaY > 0 && this.minuteWidth > this.zoomFactor) {
        this.minuteWidth -= this.zoomFactor;
        factor = -this.zoomFactor;
      }
      if (event.deltaY < 0) {
        this.minuteWidth += this.zoomFactor;
        factor = this.zoomFactor;
      }
     timeSpanElement.scrollTo(timeSpanElement.scrollLeft + factor * (timeSpanElement.scrollLeft + (event.clientX - this.clientMiddle - this.marginLeft) +
                              timeSpanElement.clientWidth / 2) / currentMinuteWidth, 0);
    }
    setTimeout(() => {
      this.printValues(event);
      if (this.timeSpan && this.timeSpan.nativeElement) {
        const timeSpanElement = this.timeSpan.nativeElement;
        timeSpanElement.scrollTo(this.scrollLeft + factor * (this.scrollLeft + (event.clientX - this.clientMiddle - this.marginLeft) + timeSpanElement.clientWidth / 2) / currentMinuteWidth , 0);

        this.printValues(event);
      }
    });
  }

  printValues(event?: WheelEvent) {
    if (this.printNr++ % 5 == 0) {
      console.log('     client\tclient\tscroll\tscroll\t\tminute');
      console.log('zoom Left\tWidth\tLeft\tWidth\tmouse\twidth');
    }
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      console.log((event ? event.deltaY < 0 ? 'in    ' : 'out   ' : '      ')
          + timeSpanElement.clientLeft + ' '
          + '\t' + timeSpanElement.clientWidth
          + '\t' + timeSpanElement.scrollLeft
          + '\t' + timeSpanElement.scrollWidth
          + '\t' + (event ? event.clientX : '')
          + '\t' + this.minuteWidth
          + '\t' + (75 * this.minuteWidth * 5 - timeSpanElement.clientWidth / 2)
          + '\t' + (timeSpanElement.scrollLeft + (event ? event.clientX - 258: 0) + timeSpanElement.clientWidth / 2) / (this.minuteWidth * 5)
          + '\t'
      );
    }
  }

}
