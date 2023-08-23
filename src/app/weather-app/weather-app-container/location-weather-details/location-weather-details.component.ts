import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from '../../weather-app.service';
import { getIcon } from '../weather-app.constants';

@Component({
  selector: 'selected-location-weather-details',
  templateUrl: './location-weather-details.component.html',
  styleUrls: ['./location-weather-details.component.css'],
})
export class LocationWeatherDetailsComponent implements OnInit {
  renderData: any;
  fiveDayForecastData: any[];
  getIconUrl = getIcon;
  constructor(private _weatherForecastService: WeatherAppService) {}

  ngOnInit(): void {
    this._weatherForecastService.searchedLocationData.subscribe((data) => {
      // console.log('Data to be rendered in right side', data);
      this.renderData = data;
      this.get5DayForecastData(data.coord);
    });
  }

  get5DayForecastData(location) {
    this._weatherForecastService
      .getCityWeatherForecastData(location)
      .subscribe((data) => {
        this.fiveDayForecastData = (data['daily'] as Array<any>).slice(0, 5);
        // const dailyForecastData = data['daily'];
        // dailyForecastData?.map(
        //   (dayWeatherDetails) =>
        //     (dayWeatherDetails.dt = new Date(
        //       dayWeatherDetails.dt * 1000
        //     ).getDate())
        // );
        // console.log(dailyForecastData);
      });
  }

  get(str: string, data: number) {
    let requirement;
    if (str.toLocaleLowerCase() === 'date') {
      requirement = new Date(data * 1000).getDate();
    } else if (str.toLocaleLowerCase() === 'day') {
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      requirement = weekdays[new Date(data * 1000).getDay()];
    }
    return requirement;
  }
}
