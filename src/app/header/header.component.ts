import { Component, OnInit, Input } from '@angular/core';
import { GilgurpaBio } from '../gilgurpaBio';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() bio : GilgurpaBio;

  constructor() { }

  ngOnInit(): void {
  }

}
