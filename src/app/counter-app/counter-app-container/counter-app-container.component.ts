import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter.model';
import { CounterAppService } from '../counter-app.service';

@Component({
  selector: 'counter-app-container',
  templateUrl: './counter-app-container.component.html',
  styleUrls: ['./counter-app-container.component.css'],
})
export class CounterAppContainerComponent implements OnInit {
  allCounters: Counter[] = [];
  constructor(private _counterAppService: CounterAppService) {}

  ngOnInit(): void {
    this._counterAppService.listOfAllCounters.subscribe(
      (allCounters: Counter[]) => {
        this.allCounters = allCounters;
        console.log(this.allCounters);
      }
    );
  }

  addCounter() {
    const counter: Counter = {
      uuid: self.crypto.randomUUID(),
      count: 0,
    };
    this.allCounters.unshift(counter);
    this._counterAppService.listOfAllCounters = this.allCounters;
  }

  resetAllCounters() {
    this.allCounters.map((counter) => (counter.count = 0));
    this._counterAppService.listOfAllCounters = this.allCounters;
  }

  deleteAllCounters() {
    this.allCounters = [];
    this._counterAppService.listOfAllCounters = this.allCounters;
  }
}
