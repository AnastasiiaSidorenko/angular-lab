import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPokemonProfileComponent } from './edit-pokemon-profile.component';
import { RouterModule } from '@angular/router';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';

describe('EditPokemonProfileComponent', () => {
  let component: EditPokemonProfileComponent;
  let fixture: ComponentFixture<EditPokemonProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPokemonProfileComponent],
      imports: [
        RouterModule.forRoot([]),
        ModalModule.forRoot(),
        StoreModule.forRoot({})
      ],
      providers: [BsModalRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
