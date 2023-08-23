import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterAppContainerComponent } from './counter-app-container/counter-app-container.component';

const routes: Routes = [
  {path: '', component: CounterAppContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterAppRoutingModule { }
