import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherAppService {
  domain = `https://api.openweathermap.org`;
  APIKey = `d4594364698122bfd1c4b3eb5f2ff19f`;
  constructor(private _http: HttpClient) {}

  getCityWeatherData(city: string) {
    let url = `${this.domain}/data/2.5/weather?q=${city}&units=metric&appid=${this.APIKey}`;
    return this._http.get(url);
    // .pipe(
    //   catchError((err) => {
    //     if (err.status === 404) {
    //       console.log(`City ${city} not found`);
    //       return EMPTY;
    //     }
    //   })
    // );
  }
}
