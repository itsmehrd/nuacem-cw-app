import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppContainerComponent } from './weather-app-container.component';

describe('WeatherAppContainerComponent', () => {
  let component: WeatherAppContainerComponent;
  let fixture: ComponentFixture<WeatherAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAppContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
