import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherAppContainerComponent } from './weather-app-container/weather-app-container.component';

const routes: Routes = [{ path: '', component: WeatherAppContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherAppRoutingModule {}
