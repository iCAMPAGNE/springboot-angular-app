import { Component } from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent {

  circleOffset:number = 0;
  circlePos:number = 0;
  radius:number = 30;

  ngOnInit(): void {
    let t = 0;
    for(;t<250; t++) {
      setTimeout(() => {
        this.circleOffset += 0.5;
        this.circlePos += 0.5;
        this.radius++;
      }, 3000 + 50*t)
    }
    for(; t<500; t++) {
      setTimeout(() => {
        this.circleOffset -= 0.5;
        this.circlePos -= 0.5;
        this.radius--;
      }, 3000 + 50*t)
    }
    for(;t<750; t++) {
      setTimeout(() => {
        this.circleOffset -= 0.5;
        this.circlePos -= 0.0025;
        this.radius -= 0.005;
      }, 3000 + 50*t)
    }
    for(;t<1000; t++) {
      setTimeout(() => {
        this.circleOffset+= 0.5;
        this.circlePos += 0.0025;
        this.radius += 0.005;
      }, 3000 + 50*t)
    }
    for(;t<1500; t++) {
      setTimeout(() => {
        this.circleOffset += 0.5;
        this.circlePos += 0.5;
        this.radius++;
      }, 3000 + 50*t)
    }
  }

}
