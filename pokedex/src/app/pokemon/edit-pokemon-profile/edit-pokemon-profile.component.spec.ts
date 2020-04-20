import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPokemonProfileComponent } from './edit-pokemon-profile.component';

describe('EditPokemonProfileComponent', () => {
  let component: EditPokemonProfileComponent;
  let fixture: ComponentFixture<EditPokemonProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPokemonProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
