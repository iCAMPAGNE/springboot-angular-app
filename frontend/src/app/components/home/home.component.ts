import {Component, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demoButton1Disabled: boolean = false;
  demoButton2Disabled: boolean = false;
  processing: boolean = false;
  checkBoxValid: boolean = false;

  constructor(private firstService: FirstService) {
  }

  ngOnInit(): void {
    this.firstService.functionInAbstractService();
  }

  demoButton1Submit() {
    this.demoButton1Disabled = true;
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
      this.demoButton1Disabled = false;
    }, 5000);
  }

  demoButton2Submit() {
    this.demoButton2Disabled = true;
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
      this.demoButton2Disabled = false;
    }, 5000);
  }
}
