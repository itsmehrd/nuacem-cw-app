import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../../counter.model';
import { CounterAppService } from '../../counter-app.service';

@Component({
  selector: 'individual-counter',
  templateUrl: './individual-counter.component.html',
  styleUrls: ['./individual-counter.component.css'],
})
export class IndividualCounterComponent implements OnInit {
  allCounters: Counter[];
  @Input() counter: Counter;

  constructor(private _counterAppService: CounterAppService) {}

  ngOnInit(): void {
    this._counterAppService.listOfAllCounters.subscribe(
      (allCounters: Counter[]) => {
        this.allCounters = allCounters;
        console.log(this.allCounters);
      }
    );
  }

  increment() {
    this.counter.count += 1;
  }
  decrement() {
    this.counter.count -= 1;
  }
  delete(counterId) {
    this.allCounters = this.allCounters?.filter(
      (counter) => counter.uuid !== counterId
    );
    this._counterAppService.listOfAllCounters = this.allCounters;
  }
}
