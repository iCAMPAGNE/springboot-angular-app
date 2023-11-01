import {Component, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private firstService: FirstService) {
  }

  ngOnInit(): void {
    this.firstService.functionInAbstractService();
  }

}
