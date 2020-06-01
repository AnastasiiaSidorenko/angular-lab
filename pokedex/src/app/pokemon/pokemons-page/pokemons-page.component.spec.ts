import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsPageComponent } from './pokemons-page.component';
import { StoreModule } from '@ngrx/store';

describe('PokemonsPageComponent', () => {
  let component: PokemonsPageComponent;
  let fixture: ComponentFixture<PokemonsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsPageComponent],
      imports: [StoreModule.forRoot({})]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
