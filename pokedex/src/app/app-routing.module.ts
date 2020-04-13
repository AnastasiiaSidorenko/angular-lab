import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsPageComponent } from './pokemon/pokemons-page/pokemons-page.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';


const routes: Routes = [
  { path: '', component: PokemonsPageComponent },
  { path: 'pokemons/:pokemonId', component: PokemonProfileComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
