import {Attribute, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[attr-dir]'
})
export class SingleHostElementAttributeDirective {

  bgColorSwap: boolean = false;

  constructor(elementRef: ElementRef, @Attribute("attr-dir") bgColor: string) {
    elementRef.nativeElement.style.background = bgColor || "#88AACC";
    elementRef.nativeElement.style.margin = '1em';
    elementRef.nativeElement.style.padding = '2em';
    elementRef.nativeElement.style.borderRadius = '0.3em';

    elementRef.nativeElement.addEventListener("click", (e:any) => {
      elementRef.nativeElement.style.background = this.bgColorSwap ? "#88AACC" : "#CCAA88";
      this.bgColorSwap = !this.bgColorSwap;
    });
  }
}
