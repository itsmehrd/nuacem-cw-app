import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CounterAppModule } from './counter-app/counter-app.module';
import { WeatherAppModule } from './weather-app/weather-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CounterAppModule,
    WeatherAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
