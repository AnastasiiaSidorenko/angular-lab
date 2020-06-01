import { TestBed } from '@angular/core/testing';
import { CancelGuard } from './cancel.guard';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('CancelGuardGuard', () => {
  let guard: CancelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()]
    });
    guard = TestBed.inject(CancelGuard);
  });

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
