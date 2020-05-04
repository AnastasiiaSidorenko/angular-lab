import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PokemonFeatureState } from './app.state';

export const selectPokemonsState = createFeatureSelector<PokemonFeatureState>('pokemonFeature');

export const selectCurrentPokemon = createSelector(
    selectPokemonsState, (state: PokemonFeatureState) => state.currentPokemon
);

export const selectAllPokemons = createSelector(
    selectPokemonsState, (state: PokemonFeatureState) => state.pokemons
);
