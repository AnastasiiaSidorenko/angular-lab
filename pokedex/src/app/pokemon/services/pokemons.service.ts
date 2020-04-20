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
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'charmander',
      id: 4,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 62,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'charizard',
      id: 6,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 85,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'caterpie',
      id: 10,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'metapod',
      id: 11,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    },
    {
      name: 'butterfree',
      id: 12,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    }
  ];

  constructor() { }

  getAllPokemons(): Pokemon[] {
    return this.pokemons;
  }

  filterPokemons(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon: Pokemon) => pokemon.name.indexOf(name) !== -1);
  }

  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }

  updatePokemon(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.map((item) => {
      if (item.id === pokemon.id) {
        return pokemon;
      }
      return item;
    });
  }
}
