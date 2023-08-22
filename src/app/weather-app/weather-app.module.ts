import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAppContainerComponent } from './weather-app-container/weather-app-container.component';
import { VerticalLocationsPanelComponent } from './weather-app-container/vertical-locations-panel/vertical-locations-panel.component';
import { LocationWeatherDetailsComponent } from './weather-app-container/location-weather-details/location-weather-details.component';



@NgModule({
  declarations: [WeatherAppContainerComponent, VerticalLocationsPanelComponent, LocationWeatherDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    WeatherAppContainerComponent
  ]
})
export class WeatherAppModule { }
