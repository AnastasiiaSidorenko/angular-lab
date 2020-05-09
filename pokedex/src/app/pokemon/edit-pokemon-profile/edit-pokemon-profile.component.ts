import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SaveModalComponent } from '../save-modal/save-modal.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../@ngrx/app.state';
import * as PokemonsActions from '../../@ngrx/pokemon.actions';
import { selectCurrentPokemon } from '../../@ngrx/pokemon.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-pokemon-profile',
  templateUrl: './edit-pokemon-profile.component.html',
  styleUrls: ['./edit-pokemon-profile.component.scss']
})
export class EditPokemonProfileComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | null;
  copyPokemon: Pokemon | null;
  isSaved = false;
  private anchor: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.store.dispatch(PokemonsActions.getPokemonById({ id: +params.get('pokemonId') }));
    });
    this.anchor = this.store.pipe(select(selectCurrentPokemon)).subscribe(pokemon => {
      this.pokemon = { ...pokemon };
      this.copyPokemon = { ...pokemon };
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(PokemonsActions.clearCurrentPokemon());
    this.anchor.unsubscribe();
  }

  saveChanges(): void {
    this.isSaved = true;
    this.store.dispatch(PokemonsActions.updatePokemon({ pokemon: this.pokemon }));
    const initialState = {
      id: this.pokemon.id
    };
    this.modalService.show(SaveModalComponent, { class: 'modal-sm', initialState });
  }

  cancelChanges(): void {
    this.router.navigate([`pokemons/${this.pokemon.id}`]);
  }
}
