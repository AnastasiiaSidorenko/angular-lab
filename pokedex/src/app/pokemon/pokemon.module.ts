import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RedBoldDirective } from './directives/card-border.directive';

@NgModule({
  declarations: [HeaderComponent, PokemonsPageComponent, PokemonCardComponent, RedBoldDirective],
  imports: [CommonModule],
  exports: [PokemonsPageComponent, HeaderComponent, PokemonCardComponent]
})
export class PokemonModule { }
