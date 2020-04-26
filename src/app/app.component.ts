import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Data
  public data = [
    { x: "January", y: 20 },
    { x: "February", y: 25 },
    { x: "March", y: 28 },
  ];


}
