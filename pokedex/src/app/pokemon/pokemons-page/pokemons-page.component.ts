import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as PokemonsActions from '../../@ngrx/pokemon.actions';
import { AppState } from '../../@ngrx/app.state';
import { selectAllPokemons } from '../../@ngrx/pokemon.selectors';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  simpleView = false;
  pokemons$: Observable<Pokemon[]> = this.store.pipe(select(selectAllPokemons));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(PokemonsActions.getAllPokemons());
  }

  switchView(): void {
    this.simpleView = !this.simpleView;
  }

  filterPokemons(name: string): void {
    this.store.dispatch(PokemonsActions.filterPokemons({ name }));
  }

  onChanged(pokemon: Pokemon): void {
    const newPokemon = {
      ...pokemon,
      isCaught: !pokemon.isCaught
    };
    console.log(`Pokemon ${newPokemon.name} ${newPokemon.isCaught ? 'is caught' : 'is free'}`);
    this.store.dispatch(PokemonsActions.updatePokemon({ pokemon: newPokemon }));
  }
}
