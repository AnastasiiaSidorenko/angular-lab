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

@NgModule({
  declarations: [
    PokemonsPageComponent,
    PokemonCardComponent,
    RedBoldDirective,
    PokemonTextComponent,
    PokemonProfileComponent,
    PokemonSearchComponent,
    EditPokemonProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PokemonsPageComponent,
    PokemonCardComponent,
    PokemonProfileComponent]
})
export class PokemonModule { }
