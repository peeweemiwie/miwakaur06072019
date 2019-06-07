import { Component, OnInit } from '@angular/core';

import { Experience } from '../class-experience';
import { ITEMS } from '../data-experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
