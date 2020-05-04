import { createReducer, on, Action } from '@ngrx/store';
import * as PokemonsActions from './pokemon.actions';
import { Pokemon } from '../pokemon/models/pokemon.model';

interface State {
    pokemons: Pokemon[];
    currentPokemon: Pokemon | null;
}

const intitalState: State = {
    pokemons: [],
    currentPokemon: null
};

const reducer = createReducer(intitalState,
    on(PokemonsActions.pokemonsLoaded, (state: State, { pokemons }) => {
        return {
            ...state,
            pokemons
        };
    }),
    on(PokemonsActions.filteredPokemonsLoaded, (state: State, { pokemons }) => {
        return {
            ...state,
            pokemons
        };
    }),
    on(PokemonsActions.updatedPokemon, (state: State, { pokemon }) => {
        const newPokemons = state.pokemons.map((item) => {
            if (item.id === pokemon.id) {
                return pokemon;
            }
            return item;
        });
        return {
            ...state,
            pokemons: newPokemons
        };
    }),
    on(PokemonsActions.currentPokemonLoaded, (state: State, { pokemon }) => {
        return {
            ...state,
            currentPokemon: pokemon
        };
    }),
    on(PokemonsActions.clearCurrentPokemon, (state: State) => {
        return {
            ...state,
            currentPokemon: null
        };
    })
);

export function pokemonsReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
}
