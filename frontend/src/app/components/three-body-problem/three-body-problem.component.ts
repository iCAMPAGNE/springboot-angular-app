import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-body-problem',
  imports: [],
  templateUrl: './three-body-problem.component.html',
  styleUrl: './three-body-problem.component.scss',
})
export class ThreeBodyProblemComponent implements OnInit {
  movingObjects: MovingObject[] = [];
  cclObjects: MovingObject[] = [];
  movements: number[][] = [
    [20, 300, 1.2910, 10, 500, -2.5820],
    [15, 300, 1.9365, 15, 500, -1.9365],
    [15, 300, 2.5, 15, 500, -2.5]
  ]
  movement: number[] = this.movements[1];

  ngOnInit(): void { // 1.291 , -2.582 : 0.0250 / 0.0500
    this.movingObjects.push(new MovingObject(1, this.movement[0], this.movement[1], 0, 400, this.movement[2], 'blue'));
    this.movingObjects.push(new MovingObject(2, this.movement[3], this.movement[4], 0, 400, this.movement[5], 'green'));
    // this.movingObjects.push(new MovingObject(3, 400, 0, 300, 0, 'yellow'));
    // this.movingObjects.push(new MovingObject(4, 400, -2, 500, -0, 'cyan', false));

    const calculatedObjects: MovingObject[] = [];
    this.movingObjects.forEach(obj => {
      calculatedObjects.push(new MovingObject(obj.nr, obj.mass, obj.posX, obj.speedX, obj.posY, obj.speedY, 'light' + obj.objectColor))
      this.cclObjects.push(new MovingObject(obj.nr, obj.mass, obj.posX, obj.speedX, obj.posY, obj.speedY, 'light' + obj.objectColor))
    });

    setTimeout(() => {
      this.moveObjects(calculatedObjects);
    }, 2000);
  }

  moveObjects(calculatedObjects: MovingObject[]) {
    const centerOfGravityX: number = this.movingObjects.reduce((total, current) => total + current.posX, 0) / this.movingObjects.length;
    const centerOfGravityY: number = this.movingObjects.reduce((total, current) => total + current.posY, 0) / this.movingObjects.length;
    const averageSpeedX: number = this.movingObjects.reduce((total, current) => total + current.speedX, 0) / this.movingObjects.length;
    const averageSpeedY: number = this.movingObjects.reduce((total, current) => total + current.speedY, 0) / this.movingObjects.length;

    let times: number = 0;
    const intervalRef = setInterval(() => {
      calculatedObjects.forEach(calculatedObject => {
        const cclObject = this.cclObjects.findLast(o => o.nr === calculatedObject.nr);
        if (cclObject) {
          // cclObject.posX = (centerOfGravityX - calculatedObject.posX + calculatedObject.speedX * times) * Math.sin(times * Math.PI / 300) + centerOfGravityX;
          // cclObject.posY = (centerOfGravityY - calculatedObject.posY + calculatedObject.speedY * times) * Math.sin(times * Math.PI / 300) + centerOfGravityY;
          cclObject.posX = centerOfGravityX + (centerOfGravityX - calculatedObject.posX) * Math.cos(times * Math.PI / 162.24);
          cclObject.posY = centerOfGravityY + (centerOfGravityY - calculatedObject.posY - calculatedObject.speedY * 51.64) * Math.sin(times * Math.PI / 162.24);
          console.log(centerOfGravityX, cclObject.posX);
        }
      });


      const refObjects: MovingObject[] = [...this.movingObjects].map(obj => new MovingObject(obj.nr, obj.mass, obj.posX, obj.speedX, obj.posY, obj.speedY, obj.objectColor));
      this.movingObjects.forEach(movingObject => {
        const objects: MovingObject[] = refObjects.filter(obj => obj.nr != movingObject.nr).map(obj => new MovingObject(obj.nr, obj.mass, obj.posX, obj.speedX, obj.posY, obj.speedY, obj.objectColor));
        movingObject.move(objects);
      })

//      console.log(`${times}:  [${this.calculatedObject1.xPos}, ${this.calculatedObject1.yPos}]   [${this.movingObjects[0].xPos}, ${this.movingObjects[0].yPos}]`);
      if (times++ >= 750 + 600 * 1000) { // 750 + 600 * X
        clearInterval(intervalRef);
      }
    }, 10)
  }
}

class MovingObject {
  nr!: number;
  posX: number = 0;
  posY: number = 0;
  mass: number = 10;
  objectColor: string = 'grey';
  speedX: number = 0;
  speedY: number = 0;
  speedMin: number = 10000;
  speedMax: number = 0;
  otherSpeedMin: number = 10000;
  otherSpeedMax: number = 0;

  constructor(nr: number, mass: number, posX: number, speedX: number, posY: number, speedY: number, color: string) {
    this.nr = nr;
    this.posX = posX;
    this.speedX = speedX;
    this.posY = posY;
    this.speedY = speedY;
    this.mass = mass;
    this.objectColor = color;
  }

  move(otherMovingObjects: MovingObject[]) {
    otherMovingObjects.forEach(otherMovingObject => {
      const distanceX = otherMovingObject.posX - this.posX;
      const distanceY = otherMovingObject.posY - this.posY;
      const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
      const angle = Math.atan2(distanceY, distanceX);
      const force = 100 * this.mass * otherMovingObject.mass / Math.pow(distance, 2);
      const acceleration = force / this.mass;
      this.speedX += acceleration * Math.cos(angle);
      this.speedY += acceleration * Math.sin(angle);
      this.posX += this.speedX;
      this.posY += this.speedY;
      if (this.nr === 1) {
        const speed = Math.sqrt(Math.pow(this.speedX, 2) + Math.pow(this.speedY, 2));
        const speedOther = Math.sqrt(Math.pow(otherMovingObject.speedX, 2) + Math.pow(otherMovingObject.speedY, 2));
        if (speed > this.speedMax) this.speedMax = speed;
        if (speed < this.speedMin) this.speedMin = speed;
        if (speedOther > this.otherSpeedMax) this.otherSpeedMax = speedOther;
        if (speedOther < this.otherSpeedMin) this.otherSpeedMin = speedOther;
        console.log("%d  %5.3f [%4.3f/%4.3f  (%5.4f)] %5.3f [%4.3f/%4.3f  (%5.4f)]",
          distance, speed, this.speedMin, this.speedMax, this.speedMax - this.speedMin, speedOther, this.otherSpeedMin, this.otherSpeedMax, this.otherSpeedMax - this.otherSpeedMin);
      }
    })
  }
}
