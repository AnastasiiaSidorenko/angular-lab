import { selectCurrentPokemon, selectPokemonsState, selectAllPokemons } from './pokemon.selectors';
import { AppState } from './app.state';

describe('My Selectors', () => {
  let currentPokemon: AppState;

  beforeEach(() => {
    currentPokemon = {
      pokemonFeature: {
        pokemons: [
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
        ],
        currentPokemon: {
          name: 'bulbasaur',
          id: 1,
          damage: 51,
          isCaught: false,
          createdAt: '2020-04-15'
        }
      }
    }
  });

  it('get current pokemon', () => {
    const state = selectPokemonsState(currentPokemon);
    expect(selectCurrentPokemon(currentPokemon)).toEqual(state.currentPokemon);
  });

  it('get current pokemons', () => {
    const state = selectPokemonsState(currentPokemon);
    expect(selectAllPokemons(currentPokemon)).toEqual(state.pokemons);
  });
});