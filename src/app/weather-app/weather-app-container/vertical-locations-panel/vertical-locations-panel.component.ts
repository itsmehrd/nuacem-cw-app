import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { WeatherAppService } from '../../weather-app.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'leftside-vertical-locations-panel',
  templateUrl: './vertical-locations-panel.component.html',
  styleUrls: ['./vertical-locations-panel.component.css'],
})
export class VerticalLocationsPanelComponent implements OnInit {
  searchInput = new FormControl();
  isInvalidInput = false;
  constructor(private _weatherForecastService: WeatherAppService) {}

  ngOnInit(): void {
    console.log(this.searchInput);
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((inputValue: string) =>
          this._weatherForecastService.getCityWeatherData(inputValue)
        )
      )
      .subscribe(
        (data) => {},
        (err) => {
          if (err.status === 404) {
          }
        }
      );
  }
}
