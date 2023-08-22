import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAppContainerComponent } from './counter-app-container/counter-app-container.component';
import { IndividualCounterComponent } from './counter-app-container/individual-counter/individual-counter.component';

@NgModule({
  declarations: [CounterAppContainerComponent, IndividualCounterComponent],
  imports: [CommonModule],
  exports: [CounterAppContainerComponent, IndividualCounterComponent],
})
export class CounterAppModule {}
