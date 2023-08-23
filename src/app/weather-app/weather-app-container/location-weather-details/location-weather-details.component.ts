import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from '../../weather-app.service';

@Component({
  selector: 'selected-location-weather-details',
  templateUrl: './location-weather-details.component.html',
  styleUrls: ['./location-weather-details.component.css'],
})
export class LocationWeatherDetailsComponent implements OnInit {
  renderData: any;
  fiveDayForecastData: any;
  constructor(private _weatherForecastService: WeatherAppService) {}

  ngOnInit(): void {
    this._weatherForecastService.searchedLocationData.subscribe((data) => {
      console.log('Data to be rendered in right side', data);
      this.renderData = data;
      this.get5DayForecastData(data.coord);
    });
  }

  get5DayForecastData(location) {
    this._weatherForecastService
      .getCityWeatherForecastData(location)
      .subscribe((data) => {
        const dailyForecastData = data['daily'];
        dailyForecastData?.map(
          (dayWeatherDetails) =>
            (dayWeatherDetails.dt = new Date(dayWeatherDetails.dt))
        );
        console.log(dailyForecastData);
      });
  }
}
