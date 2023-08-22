import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLocationsPanelComponent } from './vertical-locations-panel.component';

describe('VerticalLocationsPanelComponent', () => {
  let component: VerticalLocationsPanelComponent;
  let fixture: ComponentFixture<VerticalLocationsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalLocationsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLocationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
