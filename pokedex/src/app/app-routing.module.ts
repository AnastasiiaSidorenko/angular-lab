import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsPageComponent } from './pokemon/pokemons-page/pokemons-page.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { EditPokemonProfileComponent } from './pokemon/edit-pokemon-profile/edit-pokemon-profile.component';
import { CancelGuard } from './pokemon/cancel.guard';


const routes: Routes = [
  { path: '', component: PokemonsPageComponent },
  { path: 'pokemons/:pokemonId', component: PokemonProfileComponent },
  { path: 'pokemons/:pokemonId/edit', component: EditPokemonProfileComponent, canDeactivate: [CancelGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
