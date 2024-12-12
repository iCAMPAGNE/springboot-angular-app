import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {
  PPC = 50; // Pixels Per Centimeter
  ScreenDistance = 12 * this.PPC;
  PlanetRadius = 60;
  PlanetOrbitRadius = 600;
  ScreenToPlanetMiddleDistance = 300;
  PlanetOrbitPositionX = 700;
  PlanetOrbitPositionY = 400;

  planetPositionX = this.PlanetOrbitPositionX + Math.sin(2*Math.PI/3) * this.PlanetOrbitRadius;
  planetPositionY = this.PlanetOrbitPositionY;

  objectOffset = 0;

  circleOffset:number = 0;
  circlePos:number = 0;
  radius:number = this.PlanetRadius * (Math.cos(2*Math.PI/3) * this.PlanetOrbitRadius + this.ScreenDistance + this.ScreenToPlanetMiddleDistance) / this.ScreenDistance;


  ngOnInit(): void {
    this.planetOrbit();
  }

  planetOrbit(): void {
    for (let t = 2*Math.PI/3; t < 14*Math.PI/3; t += 0.002*Math.PI) {
      setTimeout(() => {
        let planetDistance= Math.sqrt(
          Math.pow(Math.cos(t) * this.PlanetOrbitRadius + this.ScreenDistance + this.ScreenToPlanetMiddleDistance,2) +
          Math.pow(Math.sin(t) * this.PlanetOrbitRadius,2));
        this.radius = this.PlanetRadius * this.ScreenDistance / planetDistance;
        this.planetPositionX = this.PlanetOrbitPositionX + this.ScreenDistance * this.PlanetOrbitRadius*Math.sin(t) /(this.ScreenDistance + this.ScreenToPlanetMiddleDistance + this.PlanetOrbitRadius*Math.cos(t));
        this.objectOffset = 2 * this.PPC * (Math.cos(t) * this.PlanetOrbitRadius + this.ScreenToPlanetMiddleDistance) / (Math.cos(t) * this.PlanetOrbitRadius + this.ScreenDistance + this.ScreenToPlanetMiddleDistance);

      }, 5000*t);

    }
  }

  firstMovement(): void {
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
