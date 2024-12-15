import {Component, OnInit} from '@angular/core';

const PPC = 50; // Pixels Per Centimeter
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
    this.rotatingObjects.push(new RotatingObject(PPC * 1.2, PPC * 12, startingAngle));
    this.rotatingObjects.push(new RotatingObject(PPC * 1.2, PPC * 9, 0));
    for (let t = 0; t <= 2000; t++) {
      setTimeout(() => {
        this.rotatingObjects.forEach(rotatingObject => {
          rotatingObject.rotateObject(t);
        })
      }, 20*t + 2000);
    }
  }

  rotateObject(rotatingObject: RotatingObject, t: number) {
    const planetDistance= Math.sqrt(
      Math.pow(Math.cos(rotatingObject.getAngle(t)) * rotatingObject.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER,2) +
      Math.pow(Math.sin(rotatingObject.getAngle(t)) * rotatingObject.orbitRadius,2));
    rotatingObject.opticalRadius = rotatingObject.radius * SCREEN_DISTANCE / planetDistance;
    rotatingObject.planetPositionX = PPC * 18 + SCREEN_DISTANCE * rotatingObject.orbitRadius*Math.sin(rotatingObject.getAngle(t)) /(SCREEN_DISTANCE + ORBIT_CENTER + rotatingObject.orbitRadius*Math.cos(rotatingObject.getAngle(t)));
    rotatingObject.threeDoffset = (EYE_DISTANCE/2) * (Math.cos(rotatingObject.getAngle(t)) * rotatingObject.orbitRadius + ORBIT_CENTER) / (Math.cos(rotatingObject.getAngle(t)) * rotatingObject.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER);
  }
}

class RotatingObject {
  opticalRadius = 0; // As seen by the viewer
  threeDoffset = 0;
  planetPositionX!: number
  constructor(
    public radius: number,
    public orbitRadius: number,
    public startingAngle: number
  ) {
    this.rotateObject(0);
    // const planetDistance= Math.sqrt(
    //   Math.pow(Math.cos(this.getAngle(startingAngle)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER,2) +
    //   Math.pow(Math.sin(this.getAngle(startingAngle)) * this.orbitRadius,2));
    // this.opticalRadius = this.radius * SCREEN_DISTANCE / planetDistance;
    // this.planetPositionX = PPC * 18 + SCREEN_DISTANCE * this.orbitRadius*Math.sin(this.getAngle(startingAngle)) /(SCREEN_DISTANCE + ORBIT_CENTER + this.orbitRadius*Math.cos(this.getAngle(startingAngle)));
    // this.threeDoffset = (EYE_DISTANCE/2) * (Math.cos(this.getAngle(startingAngle)) * this.orbitRadius + ORBIT_CENTER) / (Math.cos(this.getAngle(startingAngle)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER);
  }

  rotateObject(t: number) {
    const planetDistance= Math.sqrt(
      Math.pow(Math.cos(this.getAngle(t)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER,2) +
      Math.pow(Math.sin(this.getAngle(t)) * this.orbitRadius,2));
    this.opticalRadius = this.radius * SCREEN_DISTANCE / planetDistance;
    this.planetPositionX = PPC * 18 + SCREEN_DISTANCE * this.orbitRadius*Math.sin(this.getAngle(t)) /(SCREEN_DISTANCE + ORBIT_CENTER + this.orbitRadius*Math.cos(this.getAngle(t)));
    this.threeDoffset = (EYE_DISTANCE/2) * (Math.cos(this.getAngle(t)) * this.orbitRadius + ORBIT_CENTER) / (Math.cos(this.getAngle(t)) * this.orbitRadius + SCREEN_DISTANCE + ORBIT_CENTER);
  }

  getAngle(t: number): number {
    return t * 0.002*Math.PI + this.startingAngle;
  }
}
