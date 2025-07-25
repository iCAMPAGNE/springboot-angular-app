import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstService} from "../../services/first.service";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    FormsModule,
    NgClass
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  demoButton1Disabled: boolean = false;
  demoButton2Disabled: boolean = false;
  processing: boolean = false;
  checkBoxValid: boolean = false;
  contentType1: string = '';
  contentType2: string = '';
  contentType3: string = '';
  win: Window | null = null;

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

  openXmlWindow() {
    this.contentType1 = '';
    this.contentType2 = '';
    this.contentType3 = '';
    const blob = new Blob(['<name>Frans</name>'], { type: 'text/xml' });
    const fileURL = window.URL.createObjectURL(blob);
    this.win = window.open(fileURL, 'MyWindow', 'popup=true, width=180,height=300,left=1840,top=50');
    if (this.win != null) {
      this.contentType1 = '' + this.win.document.contentType;
      this.win.document.addEventListener('loaded',   () => {
        this.contentType2 = '' + this.win?.document.contentType;
      }, true);
      setTimeout(() => {
        this.contentType3 = '' + this.win?.document.contentType;
      }, 1000);
    }
  }

  openHtmlWindow() {
    this.contentType1 = '';
    this.contentType2 = '';
    this.contentType3 = '';
    const blob = new Blob(['<html><body><h2>HTML file</h2></body></html>'], { type: 'text/html' });
    const fileURL = window.URL.createObjectURL(blob);
    if (this.win != null) {
      this.win.open(fileURL, 'MyWindow', 'popup=true, width=400,height=600,left=960,top=0');
      this.contentType1 = this.win.document.contentType;
      this.win.onload = () => {
        this.contentType2 = this.win?.document.contentType + '';
      }
      setTimeout(() => {
        this.contentType3 = this.win?.document.contentType + '';
      }, 1000);
    }
  }

  closeWindow() {
    this.win?.close();
    this.contentType1 = '';
    this.contentType2 = '';
    this.contentType3 = '';
  }


  ngOnDestroy(): void {
    this.win?.close();
  }
}
