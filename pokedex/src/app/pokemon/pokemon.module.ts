import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [HeaderComponent, PokemonsPageComponent, PokemonCardComponent],
  imports: [CommonModule],
  exports: [PokemonsPageComponent, HeaderComponent]
})
export class PokemonModule { }
