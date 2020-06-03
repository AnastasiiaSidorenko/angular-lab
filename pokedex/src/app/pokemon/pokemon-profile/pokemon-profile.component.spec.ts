import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileComponent } from './pokemon-profile.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('PokemonProfileComponent', () => {
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonProfileComponent],
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot({})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
