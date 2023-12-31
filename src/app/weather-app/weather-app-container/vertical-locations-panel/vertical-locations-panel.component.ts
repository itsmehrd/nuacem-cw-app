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
  getIconUrl = getIcon;
  countAccepted = 8;
  currentData: any;
  constructor(private _weatherForecastService: WeatherAppService) {}

  ngOnInit(): void {
    this._weatherForecastService.searchedLocationData.subscribe((data) => {
      this.currentData = data;
    });
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
        this._weatherForecastService.searchedLocationData.next(data);
        this._weatherForecastService.showDetailedView.next(true);
        if (
          !this.allLocationsSearched.find(
            (location) => location['name'] === data['name']
          )
        ) {
          if (this.allLocationsSearched.length >= this.countAccepted) {
            console.log(`8th Element came in`);
            this.allLocationsSearched?.pop();
          }
          this.allLocationsSearched?.unshift(data);
        } else {
          // console.log(`duplicate location skipped`);
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

  remove(locationName) {
    if (locationName === 'all') {
      this.allLocationsSearched.length = 0;
      this.searchInput = '';
    } else {
      this.allLocationsSearched = this.allLocationsSearched.filter(
        (el) => el['name'] !== locationName
      );
    }
    if (
      this.allLocationsSearched.length === 0 ||
      this.currentData.name === locationName
    ) {
      this._weatherForecastService.showDetailedView.next(false);
    }
  }
}
