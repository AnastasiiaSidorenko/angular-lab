import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveModalComponent } from './save-modal.component';
import { RouterModule } from '@angular/router';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

describe('SaveModalComponent', () => {
  let component: SaveModalComponent;
  let fixture: ComponentFixture<SaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaveModalComponent],
      imports: [
        RouterModule.forRoot([]),
        ModalModule.forRoot()
      ],
      providers: [
        BsModalRef
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
