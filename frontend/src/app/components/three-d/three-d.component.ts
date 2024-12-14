import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {
  PPC = 50; // Pixels Per Centimeter

  EyesDistance = this.PPC * 6;
  ScreenDistance = this.PPC * 12;
  PlanetRadius = this.PPC * 1.2;
  PlanetOrbitRadius = this.PPC * 12;
  ScreenToPlanetMiddleDistance = this.PPC * 5;
  PlanetOrbitPositionX = this.PPC * 18;
  PlanetOrbitPositionY = this.PPC * 8;

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
    const startingAngle  = Math.PI - Math.acos(this.ScreenToPlanetMiddleDistance/this.PlanetOrbitRadius);
    for (let t = 0; t <= 2000; t++) {
      const angle = t * 0.002*Math.PI + startingAngle;
      setTimeout(() => {
        this.rotateObject(angle);
      }, 20*t + 2000);
    }
  }

  rotateObject(angle: number) {
    const planetDistance= Math.sqrt(
      Math.pow(Math.cos(angle) * this.PlanetOrbitRadius + this.ScreenDistance + this.ScreenToPlanetMiddleDistance,2) +
      Math.pow(Math.sin(angle) * this.PlanetOrbitRadius,2));
    this.radius = this.PlanetRadius * this.ScreenDistance / planetDistance;
    this.planetPositionX = this.PlanetOrbitPositionX + this.ScreenDistance * this.PlanetOrbitRadius*Math.sin(angle) /(this.ScreenDistance + this.ScreenToPlanetMiddleDistance + this.PlanetOrbitRadius*Math.cos(angle));
    this.objectOffset = (this.EyesDistance/2) * (Math.cos(angle) * this.PlanetOrbitRadius + this.ScreenToPlanetMiddleDistance) / (Math.cos(angle) * this.PlanetOrbitRadius + this.ScreenDistance + this.ScreenToPlanetMiddleDistance);
  }
}
