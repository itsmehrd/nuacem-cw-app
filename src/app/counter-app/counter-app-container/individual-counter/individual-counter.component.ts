import { Component, Input, OnInit } from '@angular/core';
import { CounterAppService } from '../../counter-app.service';
import { Counter } from '../../counter.model';

@Component({
  selector: 'individual-counter',
  templateUrl: './individual-counter.component.html',
  styleUrls: ['./individual-counter.component.css'],
})
export class IndividualCounterComponent implements OnInit {
  allCounters: Counter[];
  @Input() counter: Counter;

  constructor(public counterAppService: CounterAppService) {}

  ngOnInit(): void {}

  increment() {
    this.counter.count += 1;
  }
  decrement() {
    this.counter.count -= 1;
  }
  delete(counterId) {
    this.counterAppService.allCounters =
      this.counterAppService.allCounters?.filter(
        (counter) => counter.uuid !== counterId
      );
  }
}
