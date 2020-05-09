import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { of, Observable } from 'rxjs';

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

  getAllPokemons(): Observable<Pokemon[]> {
    return of(this.pokemons);
  }

  filterPokemons(name: string): Observable<Pokemon[]> {
    const filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => pokemon.name.indexOf(name) !== -1);
    return of(filteredPokemons);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const pokemon = this.pokemons.find((item: Pokemon) => item.id === id);
    return of(pokemon);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    this.pokemons = this.pokemons.map((item) => {
      if (item.id === pokemon.id) {
        return pokemon;
      }
      return item;
    });
    return of(pokemon);
  }
}
