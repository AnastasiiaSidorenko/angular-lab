import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RedBoldDirective } from './directives/card-border.directive';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

@NgModule({
  declarations: [HeaderComponent, PokemonsPageComponent, PokemonCardComponent, RedBoldDirective, PokemonTextComponent, PokemonProfileComponent],
  imports: [CommonModule],
  exports: [PokemonsPageComponent, HeaderComponent, PokemonCardComponent, PokemonProfileComponent]
})
export class PokemonModule { }
