import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-materialdesign',
  templateUrl: './materialdesign.component.html',
  styleUrls: ['./materialdesign.component.scss']
})
export class MaterialdesignComponent {

  constructor(private snackBar: MatSnackBar) {}

  clickFavorite() {
    this.snackBar.open('Message archived', 'Undo', {
      duration: 3000
    });
  }
}
