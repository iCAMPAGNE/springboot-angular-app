import {Component, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demoButtonDisabled: boolean = false;

  constructor(private firstService: FirstService) {
  }

  ngOnInit(): void {
    this.firstService.functionInAbstractService();
  }

  demoButtonSubmit() {
    this.demoButtonDisabled = true;
    setTimeout(() => {
      this.demoButtonDisabled = false;
    }, 5000);
  }
}
