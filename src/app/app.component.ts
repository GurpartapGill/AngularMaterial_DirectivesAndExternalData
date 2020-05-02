import { Component } from '@angular/core';

import { GilgurpaBio } from "./gilgurpaBio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gilgurpaA4';

  gilgurpaInfo : GilgurpaBio = {
    gilgurpaName : "Gurpartap Gill",
    gilgurpaID : "991529145"
  }
}
