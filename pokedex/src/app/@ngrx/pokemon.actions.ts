import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../pokemon/models/pokemon.model';

export const getAllPokemons = createAction(
    '[PokemonModule] GET_ALL_POKEMONS'
);

export const pokemonsLoaded = createAction(
    '[PokemonModule] POKEMONS_LOADED',
    props<{ pokemons: Pokemon[] }>()
);

export const filterPokemons = createAction(
    '[PokemonModule] FILTER_POKEMONS',
    props<{ name: string }>()
);

export const filteredPokemonsLoaded = createAction(
    '[PokemonModule] FILTERED_POKEMONS_LOADED',
    props<{ pokemons: Pokemon[] }>()
);

export const getPokemonById = createAction(
    '[PokemonModule] GET_POKEMON_BY_ID',
    props<{ id: number }>()
);

export const currentPokemonLoaded = createAction(
    '[PokemonModule] CURRENT_POKEMON_LOADED',
    props<{ pokemon: Pokemon }>()
);

export const clearCurrentPokemon = createAction(
    '[PokemonModule] CLEAR_CURRENT_POKEMON'
);

export const updatePokemon = createAction(
    '[PokemonModule] UPDATE_POKEMON',
    props<{ pokemon: Pokemon }>()
);

export const updatedPokemon = createAction(
    '[PokemonModule] UPDATED_POKEMON',
    props<{ pokemon: Pokemon }>()
);
