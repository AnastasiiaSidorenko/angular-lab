import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelModalComponent } from './cancel-modal.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

describe('CancelModalComponent', () => {
  let component: CancelModalComponent;
  let fixture: ComponentFixture<CancelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CancelModalComponent],
      imports: [ModalModule.forRoot()],
      providers: [
        BsModalRef
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
