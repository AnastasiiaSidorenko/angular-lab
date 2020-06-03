import { PokemonsService } from './pokemons.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonsService', () => {
  let service: PokemonsService;
  const pokemons: Pokemon[] = [
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
  const filteredPokemons: Pokemon[] = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 51,
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
      name: 'butterfree',
      id: 12,
      damage: 0,
      isCaught: false,
      createdAt: '2020-04-15'
    }
  ];

  beforeEach(() => {
    service = new PokemonsService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPokemons should return array of pokemons',
    (done: DoneFn) => {
      service.getAllPokemons().subscribe(value => {
        expect(value).toEqual(pokemons);
        done();
      });
    });

  it('filterPokemons should return array of filtered pokemons',
    (done: DoneFn) => {
      service.filterPokemons('b').subscribe(value => {
        expect(value).toEqual(filteredPokemons);
        done();
      });
    });

  it('getPokemonById should return pokemon by id',
    (done: DoneFn) => {
      service.getPokemonById(6).subscribe(value => {
        expect(value).toEqual(pokemons[5]);
        done();
      });
    });

  it('updatePokemon should return updated pokemon',
    (done: DoneFn) => {
      const pokemon = {
        name: 'cat',
        id: 1,
        damage: 105,
        isCaught: false,
        createdAt: '2020-04-15'
      };
      service.updatePokemon(pokemon).subscribe(value => {
        expect(value).toEqual(pokemon);
        done();
      });
    });
});
