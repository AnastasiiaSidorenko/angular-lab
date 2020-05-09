import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonsService } from '../pokemon/services/pokemons.service';
import * as PokemonsActions from './pokemon.actions';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()

export class PokemonsEffects {
    constructor(
        private actions$: Actions,
        private pokemonsService: PokemonsService
    ) { }

    getAllPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonsActions.getAllPokemons),
            mergeMap(() => this.pokemonsService.getAllPokemons().pipe(
                map(pokemons => PokemonsActions.pokemonsLoaded({ pokemons })),
                catchError(() => EMPTY)
            ))
        )
    );

    getFilteredPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonsActions.filterPokemons),
            mergeMap((action) => this.pokemonsService.filterPokemons(action.name).pipe(
                map(pokemons => PokemonsActions.filteredPokemonsLoaded({ pokemons })),
                catchError(() => EMPTY)
            ))
        )
    );

    updatePokemon$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonsActions.updatePokemon),
            mergeMap((action) => this.pokemonsService.updatePokemon(action.pokemon).pipe(
                map(pokemon => PokemonsActions.updatedPokemon({ pokemon })),
                catchError(() => EMPTY)
            ))
        )
    );

    getPokemonById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PokemonsActions.getPokemonById),
            mergeMap((action) => this.pokemonsService.getPokemonById(action.id).pipe(
                map(pokemon => PokemonsActions.currentPokemonLoaded({ pokemon })),
                catchError(() => EMPTY)
            ))
        )
    );
}
