import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchComponent } from './pokemon-search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSearchComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.changed, 'emit');

    const button = fixture.nativeElement.querySelector('.btn');
    button.click();

    expect(component.changed.emit).toHaveBeenCalled();
  });

  it('should test the emitter on click with argument', () => {
    spyOn(component.changed, 'emit');

    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;
    el.value = 'Pikachu';
    el.dispatchEvent(new Event('input'));

    const button = fixture.nativeElement.querySelector('.btn');
    button.click();

    expect(component.changed.emit).toHaveBeenCalledWith('Pikachu');
  });
});
