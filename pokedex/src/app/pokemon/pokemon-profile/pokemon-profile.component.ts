import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../@ngrx/app.state';
import * as PokemonsActions from '../../@ngrx/pokemon.actions';
import { selectCurrentPokemon } from '../../@ngrx/pokemon.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | null;
  private anchor: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.store.dispatch(PokemonsActions.getPokemonById({ id: +params.get('pokemonId') }));
    });
    this.anchor = this.store.pipe(select(selectCurrentPokemon)).subscribe(pokemon => {
      this.pokemon = { ...pokemon };
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(PokemonsActions.clearCurrentPokemon());
    this.anchor.unsubscribe();
  }

  catchPokemon(): void {
    this.pokemon.isCaught = !this.pokemon.isCaught;
    this.store.dispatch(PokemonsActions.updatePokemon({ pokemon: this.pokemon }));
    console.log(`Pokemon ${this.pokemon.name} ${this.pokemon.isCaught ? 'is caught' : 'is free'}`);
  }

  goToEditForm(id: number): void {
    this.router.navigate([`pokemons/${id}/edit`]);
  }
}
