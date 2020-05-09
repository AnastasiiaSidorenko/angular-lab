import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RedBoldDirective } from './directives/card-border.directive';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { RouterModule } from '@angular/router';
import { EditPokemonProfileComponent } from './edit-pokemon-profile/edit-pokemon-profile.component';
import { SaveModalComponent } from './save-modal/save-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';
import { StoreModule } from '@ngrx/store';
import { pokemonsReducer } from '../@ngrx/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from '../@ngrx/pokemon.effects';

@NgModule({
  declarations: [
    PokemonsPageComponent,
    PokemonCardComponent,
    RedBoldDirective,
    PokemonTextComponent,
    PokemonProfileComponent,
    PokemonSearchComponent,
    EditPokemonProfileComponent,
    SaveModalComponent,
    CancelModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot(),
    StoreModule.forFeature('pokemonFeature', pokemonsReducer),
    EffectsModule.forFeature([PokemonsEffects])
  ],
  exports: [
    PokemonsPageComponent,
    PokemonCardComponent,
    PokemonProfileComponent
  ]
})
export class PokemonModule { }
