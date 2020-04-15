import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  simpleView = false;
  pokemons: Pokemon[] = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 51,
      isCaught: false
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 0,
      isCaught: false
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 0,
      isCaught: false
    },
    {
      name: 'charmander',
      id: 4,
      damage: 0,
      isCaught: false
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 62,
      isCaught: false
    },
    {
      name: 'charizard',
      id: 6,
      damage: 0,
      isCaught: false
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 85,
      isCaught: false
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 0,
      isCaught: false
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 0,
      isCaught: false
    },
    {
      name: 'caterpie',
      id: 10,
      damage: 0,
      isCaught: false
    },
    {
      name: 'metapod',
      id: 11,
      damage: 0,
      isCaught: false
    },
    {
      name: 'butterfree',
      id: 12,
      damage: 0,
      isCaught: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  switchView(): void {
    this.simpleView = !this.simpleView;
  }

  onChanged(id: number): void {
    const pokemon = this.pokemons.find(item => item.id === id);
    pokemon.isCaught = !pokemon.isCaught;
    console.log(`Pokemon ${pokemon.name} ${pokemon.isCaught ? 'is caught' : 'is free'}`);
  }
}
