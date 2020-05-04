import { Pokemon } from '../pokemon/models/pokemon.model';

export interface AppState {
    pokemonFeature: PokemonFeatureState;
}

export interface PokemonFeatureState {
    pokemons: Pokemon[];
    currentPokemon: Pokemon | null;
}

export const initialAppState: AppState = {
    pokemonFeature: {
        pokemons: [],
        currentPokemon: null
    }
};
