import { TestBed } from '@angular/core/testing';

import { CounterAppService } from './counter-app.service';

describe('CounterAppService', () => {
  let service: CounterAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
