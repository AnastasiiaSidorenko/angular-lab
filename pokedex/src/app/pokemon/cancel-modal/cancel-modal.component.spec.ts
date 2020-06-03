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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call confirm', () => {
    spyOn(component, 'confirm').and.callThrough();
    const confirmBtn = fixture.nativeElement.querySelectorAll('.btn')[0];
    confirmBtn.click();
    expect(component.confirm).toHaveBeenCalled();
  });

  it('should call decline', () => {
    spyOn(component, 'decline').and.callThrough();
    const declineBtn = fixture.nativeElement.querySelectorAll('.btn')[1];
    declineBtn.click();
    expect(component.decline).toHaveBeenCalled();
  });
});
