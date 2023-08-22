import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCounterComponent } from './individual-counter.component';

describe('IndividualCounterComponent', () => {
  let component: IndividualCounterComponent;
  let fixture: ComponentFixture<IndividualCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
