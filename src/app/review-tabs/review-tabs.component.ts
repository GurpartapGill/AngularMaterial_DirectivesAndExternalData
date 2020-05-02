import { Component, OnInit, Input } from '@angular/core';
import { GilgurpaBio } from '../gilgurpaBio';
import { SCHEDULE } from "../../assets/data/reviewData"

@Component({
  selector: 'app-review-tabs',
  templateUrl: './review-tabs.component.html',
  styleUrls: ['./review-tabs.component.css']
})
export class ReviewTabsComponent implements OnInit {

  @Input() bio : GilgurpaBio;

  output: string;
  cdate = new Date();

  schedule = SCHEDULE;
  

  constructor() { }

  ngOnInit(): void {
    this.output = `Current Date: ${this.cdate.toDateString()}`;
  }

  checkdate()
  {
    this.cdate = new Date();
    this.cdate.setDate(this.cdate.getDate()+7);
    this.output = `Final Exam Date: ${this.cdate.toDateString()}`;
  }

}
