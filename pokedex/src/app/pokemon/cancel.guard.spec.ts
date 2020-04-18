import { TestBed } from '@angular/core/testing';

import { CancelGuard } from './cancel.guard';

describe('CancelGuardGuard', () => {
  let guard: CancelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CancelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
