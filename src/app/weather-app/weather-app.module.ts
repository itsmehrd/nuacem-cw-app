import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppContainerComponent } from './weather-app-container/weather-app-container.component';
import { VerticalLocationsPanelComponent } from './weather-app-container/vertical-locations-panel/vertical-locations-panel.component';
import { LocationWeatherDetailsComponent } from './weather-app-container/location-weather-details/location-weather-details.component';
import { WeatherAppRoutingModule } from './weather-app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherAppContainerComponent,
    VerticalLocationsPanelComponent,
    LocationWeatherDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherAppRoutingModule,
  ],
  exports: [],
})
export class WeatherAppModule {}
