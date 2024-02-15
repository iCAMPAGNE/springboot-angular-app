import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  ngOnInit(): void {
    console.log(location.protocol + "//" + location.host);
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/springboot-angular-app/assets/",
//      document: "assets/Sudoku-20240130-171853.pdf",
      document: "http://localhost:8092/springboot-angular-app/assets/Sudoku-20240130-171853.pdf",
      container: "#pspdfkit-container",
    }).then(instance => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
    });
  }
}