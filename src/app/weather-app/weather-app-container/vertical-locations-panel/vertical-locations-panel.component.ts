import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { WeatherAppService } from '../../weather-app.service';
import { getIcon } from '../weather-app.constants';

@Component({
  selector: 'leftside-vertical-locations-panel',
  templateUrl: './vertical-locations-panel.component.html',
  styleUrls: ['./vertical-locations-panel.component.css'],
})
export class VerticalLocationsPanelComponent implements OnInit {
  searchInput: string;
  allLocationsSearched: Array<object> = [];
  getIconUrl = getIcon
  constructor(private _weatherForecastService: WeatherAppService) {}

  ngOnInit(): void {
    
  }

  onKeypress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.getWeatherDetails(this.searchInput);
    }
  }

  getWeatherDetails(searchInput) {
    // this._weatherForecastService.getCityWeatherForecastData(searchInput).subscribe(console.warn)
    this._weatherForecastService.getCityWeatherData(searchInput).subscribe(
      (data) => {
        console.log(searchInput, data);
        this._weatherForecastService.searchedLocationData.next(data);
        if (
          !this.allLocationsSearched.find(
            (location) => location['name'] === data['name']
          )
        ) {
          this.allLocationsSearched?.unshift(data);
        } else {
          console.log(`duplicate location skipped`);
        }
      },
      (err) => {
        console.log('Error', err);
        if (err.status === 404) {
          this.searchInput = 'City name not found';
          return EMPTY;
        }
      }
    );
  }
}
