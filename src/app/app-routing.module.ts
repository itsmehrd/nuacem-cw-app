import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  {
    path: 'counterApp',
    loadChildren: () =>
      import('./counter-app/counter-app.module').then(
        (module) => module.CounterAppModule
      ),
  },
  {
    path: 'weatherApp',
    loadChildren: () =>
      import('./weather-app/weather-app.module').then(
        (module) => module.WeatherAppModule
      ),
  },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
