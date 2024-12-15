import {Component, OnInit} from '@angular/core';

const PPC = 50; // Pixels Per Centimeter
const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;
const EYE_DISTANCE = PPC * 6;
const SCREEN_DISTANCE = PPC * 12; // Distance from viewer to screen.
const ORBIT_CENTER = PPC * 5; // Distance from center of orbit to screen

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {
  rotatingObjects: RotatingObject[] = [];

  ngOnInit(): void {
    this.planetOrbit();
  }

  planetOrbit(): void {
    const startingAngle  = Math.PI - Math.acos(ORBIT_CENTER/(PPC * 12));
    this.rotatingObjects.push(new RotatingObject(PPC * 1.2, PPC * 12, 0, 1, startingAngle));
    this.rotatingObjects.push(new RotatingObject(PPC * 1.2, PPC * 9, Math.PI/4, 1.5, 0));
    this.rotatingObjects.push(new RotatingObject(PPC * 0.6, PPC * 7, Math.PI/2, 1.5, Math.PI));
    for (let t = 0; t <= 2000; t++) {
      setTimeout(() => {
        this.rotatingObjects.forEach(rotatingObject => {
          rotatingObject.rotateObject(t);
        })
      }, 20*t + 2000);
    }
  }
}

class RotatingObject {
  opticalRadius = 0; // As seen by the viewer
  threeDoffset = 0;
  opticalX!: number
  opticalY!: number
  constructor(
    public radius: number,
    public orbitRadius: number,
    public diskAngle: number,
    public speed: number,
    public startingAngle: number
  ) {
    this.rotateObject(0);
  }

  rotateObject(t: number) {
    const planetDistance= Math.sqrt(
      Math.pow(Math.cos(this.getAngle(t)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER,2) +
      Math.pow(Math.sin(this.getAngle(t)) * this.orbitRadius,2));
    this.opticalRadius = this.radius * SCREEN_DISTANCE / planetDistance;
    const vector = SCREEN_DISTANCE * this.orbitRadius*Math.sin(this.getAngle(t)) /(SCREEN_DISTANCE + ORBIT_CENTER + this.orbitRadius*Math.cos(this.getAngle(t)));
    this.opticalX = SCREEN_WIDTH/2 + Math.cos(this.diskAngle) * vector;
    this.opticalY = SCREEN_HEIGHT/2 + Math.sin(this.diskAngle) * vector;
    this.threeDoffset = (EYE_DISTANCE/2) * (Math.cos(this.getAngle(t)) * this.orbitRadius + ORBIT_CENTER) / (Math.cos(this.getAngle(t)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER);
  }

  private getAngle(t: number): number {
    return this.speed * t * 0.002*Math.PI + this.startingAngle;
  }
}
