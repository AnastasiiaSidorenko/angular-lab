import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RedBoldDirective } from '../directives/card-border.directive';

@Component({
  template: '<app-pokemon-card [pokemon]="pokemon" (changed)="onChanged($event)"></app-pokemon-card>'
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

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardComponent, TestHostComponent, RedBoldDirective],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(PokemonCardComponent);
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

  it('should render pokemon\'s name', () => {
    expect(testHostFixture.nativeElement.querySelector('h5').innerText).toEqual('bulbasaur');
  });

  it('should render pokemon\'s id', () => {
    expect(testHostFixture.nativeElement.querySelectorAll('.card-text')[0].innerText).toEqual('id:1');
  });

  it('should render pokemon\'s damage', () => {
    expect(testHostFixture.nativeElement.querySelectorAll('.card-text')[1].innerText).toEqual('damage:51');
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
