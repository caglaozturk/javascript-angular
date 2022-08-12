import { TestBed } from '@angular/core/testing';

import { SpinnerHandlerService } from './spinner-handler.service';

describe('SpinnerHandlerService', () => {
  let service: SpinnerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
