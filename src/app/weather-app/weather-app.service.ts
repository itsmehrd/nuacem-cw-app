import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherAppService {
  domain = `https://api.openweathermap.org`;
  APIKey = `d4594364698122bfd1c4b3eb5f2ff19f`;

  searchedLocationData: Subject<any> = new Subject<any>();

  constructor(private _http: HttpClient) {}

  getCityWeatherData(city: string) {
    let url = `${this.domain}/data/2.5/weather?q=${city}&units=metric&appid=${this.APIKey}`;
    return this._http.get(url);
  }

  getCityWeatherForecastData({ lat, lon }) {
    // let url = `${this.domain}/data/2.5/forecast?q=${city}&units=metric&appid=${this.APIKey}`;
    let url = `${this.domain}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${this.APIKey}`;
    return this._http.get(url);
  }
}
