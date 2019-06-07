import { Component, OnInit } from '@angular/core';

import { Portfolio } from '../class-portfolio';
import { ITEMS } from '../data-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
