import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTextComponent } from './pokemon-text.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { RedBoldDirective } from '../directives/card-border.directive';

@Component({
  template: '<app-pokemon-text [pokemon]="pokemon" (changed)="onChanged($event)"></app-pokemon-text>'
})
class TestHostComponent {
  pokemon: Pokemon = {
    name: 'bulbasaur',
    id: 1,
    damage: 51,
    isCaught: false,
    createdAt: '2020-04-15'
  };

  setInput(newInput: Pokemon): void {
    this.pokemon = newInput;
  }

  onChanged(pokemon: Pokemon): void { }
}

describe('PokemonTextComponent', () => {
  let fixture: ComponentFixture<PokemonTextComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTextComponent, TestHostComponent, RedBoldDirective],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(PokemonTextComponent);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should navigate', () => {
    let component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    const event = new MouseEvent('click');
    component.goToEditForm(3, event);
    expect(navigateSpy).toHaveBeenCalledWith(['pokemons/3/edit'])
  });

  it('should output pokemon on click', () => {
    spyOn(testHostComponent, 'onChanged');
    testHostFixture.detectChanges();

    const button = testHostFixture.nativeElement.querySelectorAll('button')[0];
    button.click();

    expect(testHostComponent.onChanged).toHaveBeenCalledWith({
      name: 'bulbasaur',
      id: 1,
      damage: 51,
      isCaught: false,
      createdAt: '2020-04-15'
    });
  });

  it('should render pokemon\'s name, id, damage', () => {
    expect(testHostFixture.nativeElement.querySelector('p').innerText).toEqual('Name: bulbasaur, id: 1, damage: 51');
  });

  it('should render catch button', () => {
    expect(testHostFixture.nativeElement.querySelectorAll('button')[0].innerText).toEqual('Catch');
  });

  it('should render setFree button', () => {
    testHostComponent.setInput({
      name: 'bulbasaur',
      id: 1,
      damage: 51,
      isCaught: true,
      createdAt: '2020-04-15'
    });
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelectorAll('button')[0].innerText).toEqual('Set free');
  });
});
