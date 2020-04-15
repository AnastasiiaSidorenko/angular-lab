import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemons: Pokemon[] = [
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

  getAllPokemons(): Pokemon[] {
    return this.pokemons;
  }

  filterPokemons(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name === name);
  }

  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }
}
