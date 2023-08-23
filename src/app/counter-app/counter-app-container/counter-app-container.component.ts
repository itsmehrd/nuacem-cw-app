import { Component, OnInit } from '@angular/core';
import { CounterAppService } from '../counter-app.service';
import { Counter } from '../counter.model';
import { createUUID } from './counter-app.constants';

@Component({
  selector: 'counter-app-container',
  templateUrl: './counter-app-container.component.html',
  styleUrls: ['./counter-app-container.component.css'],
})
export class CounterAppContainerComponent implements OnInit {
  generateUUID = createUUID;
  constructor(public counterAppService: CounterAppService) {}

  ngOnInit(): void {}

  addCounter() {
    const counter: Counter = {
      uuid: this.generateUUID(),
      count: 0,
    };
    this.counterAppService.allCounters?.unshift(counter);
  }

  resetAllCounters() {
    this.counterAppService.allCounters?.map((counter) => (counter.count = 0));
  }

  deleteAllCounters() {
    this.counterAppService.allCounters = [];
  }
}
