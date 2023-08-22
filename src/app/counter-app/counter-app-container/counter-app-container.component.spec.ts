import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAppContainerComponent } from './counter-app-container.component';

describe('CounterAppContainerComponent', () => {
  let component: CounterAppContainerComponent;
  let fixture: ComponentFixture<CounterAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAppContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
