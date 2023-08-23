import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter.model';
import { CounterAppService } from '../counter-app.service';
import { createUUID } from './counter-app.constants';

@Component({
  selector: 'counter-app-container',
  templateUrl: './counter-app-container.component.html',
  styleUrls: ['./counter-app-container.component.css'],
})
export class CounterAppContainerComponent implements OnInit {
  generateUUID = createUUID;
  constructor(
    // private _counterAppService: CounterAppService,
    public counterAppService: CounterAppService
  ) {}

  ngOnInit(): void {
    /* this._counterAppService
      .getListOfAllCounters()
      .subscribe((allCounters: Counter[]) => {
        this.allCounters = allCounters;
        console.log(this.allCounters);
      }); */
  }

  addCounter() {
    const counter: Counter = {
      uuid: this.generateUUID(),
      count: 0,
    };
    // this.allCounters?.unshift(counter);
    // this._counterAppService.setListOfAllCounters(this.allCounters);
    this.counterAppService.allCounters?.unshift(counter);
  }

  resetAllCounters() {
    // this.allCounters?.map((counter) => (counter.count = 0));
    // this._counterAppService.setListOfAllCounters(this.allCounters);
    this.counterAppService.allCounters?.map((counter) => (counter.count = 0));
  }

  deleteAllCounters() {
    // this.allCounters = [];
    // this._counterAppService.setListOfAllCounters(this.allCounters);
    this.counterAppService.allCounters = [];
  }
}
