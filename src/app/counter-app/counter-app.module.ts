import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAppContainerComponent } from './counter-app-container/counter-app-container.component';
import { IndividualCounterComponent } from './counter-app-container/individual-counter/individual-counter.component';
import { CounterAppRoutingModule } from './counter-app-routing.module';

@NgModule({
  declarations: [CounterAppContainerComponent, IndividualCounterComponent],
  imports: [CommonModule, CounterAppRoutingModule],
  exports: [],
})
export class CounterAppModule {}
