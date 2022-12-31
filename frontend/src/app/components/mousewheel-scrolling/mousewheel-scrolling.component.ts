import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mousewheel-scrolling',
  templateUrl: './mousewheel-scrolling.component.html'
})
export class MousewheelScrollingComponent implements OnInit, AfterViewInit {

  @ViewChild('timeSpan') timeSpan: ElementRef<HTMLInputElement> | undefined;

  zoomFactor: number = 5;
  clientWidth: number = 0;

  marginLeft: number = 0;
  minutes: number[] = Array.from(Array(100).keys());
  minuteWidth: number = 25;
  scrollLeft:number = 0;
  printNr: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      this.clientWidth = timeSpanElement.clientWidth / 2;
      timeSpanElement.scrollLeft = 75 * this.minuteWidth - timeSpanElement.clientWidth / 2;
      this.marginLeft = timeSpanElement.offsetLeft;
      this.printValues();
    }
  }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    const currentMinuteWidth = this.minuteWidth;
    let factor = 0;
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanEl = this.timeSpan.nativeElement;
      this.scrollLeft = timeSpanEl.scrollLeft;

      if (event.deltaY > 0 && this.minuteWidth > this.zoomFactor) {
        this.minuteWidth -= this.zoomFactor;
        factor = -this.zoomFactor;
      }
      if (event.deltaY < 0) {
        this.minuteWidth += this.zoomFactor;
        factor = this.zoomFactor;
      }
      timeSpanEl.scrollTo(timeSpanEl.scrollLeft + factor * (timeSpanEl.scrollLeft + (event.clientX - this.clientWidth - this.marginLeft) + timeSpanEl.clientWidth / 2) / currentMinuteWidth, 0);
    }
    setTimeout(() => {
      if (this.timeSpan && this.timeSpan.nativeElement) {
        const timeSpanElement = this.timeSpan.nativeElement;
       timeSpanElement.scrollTo(this.scrollLeft + factor * (this.scrollLeft + (event.clientX - this.clientWidth - this.marginLeft) + timeSpanElement.clientWidth / 2) / currentMinuteWidth , 0);

        this.printValues(event);
      }
    }, 10);
  }

  printValues(event?: WheelEvent) {
    if (this.printNr++ % 5 == 0) {
      console.log('     client\tclient\tscroll\tscroll\t');
      console.log('zoom Left\tWidth\tLeft\tWidth\tmouse');
    }
    if (this.timeSpan && this.timeSpan.nativeElement) {
      const timeSpanElement = this.timeSpan.nativeElement;
      console.log((event ? event.deltaY < 0 ? 'in    ' : 'out   ' : '      ')
          + timeSpanElement.clientLeft + ' '
          + '\t' + timeSpanElement.clientWidth
          + '\t' + timeSpanElement.scrollLeft
          + '\t' + timeSpanElement.scrollWidth
          + '\t' + (event ? event.clientX : '')
          + '\t' + (75 * this.minuteWidth * 5 - timeSpanElement.clientWidth / 2)
          + '\t' + (timeSpanElement.scrollLeft + (event ? event.clientX - 258: 0) + timeSpanElement.clientWidth / 2) / (this.minuteWidth * 5)
          + '\t'
      );
    }
  }

}
