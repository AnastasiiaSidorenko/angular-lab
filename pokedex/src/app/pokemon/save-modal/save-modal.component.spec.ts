import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveModalComponent } from './save-modal.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

describe('SaveModalComponent', () => {
  let component: SaveModalComponent;
  let fixture: ComponentFixture<SaveModalComponent>;
  let router: Router;

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

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call confirm', () => {
    spyOn(component, 'confirm').and.callThrough();
    const confirmBtn = fixture.nativeElement.querySelector('.btn');
    confirmBtn.click();
    expect(component.confirm).toHaveBeenCalled();
  });

  it('should navigate', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const confirmBtn = fixture.nativeElement.querySelector('.btn');
    confirmBtn.click()
    expect(navigateSpy).toHaveBeenCalled();
  });
});
