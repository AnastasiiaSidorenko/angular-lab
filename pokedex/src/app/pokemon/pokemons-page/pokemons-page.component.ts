import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  simpleView = false;
  pokemons: Pokemon[];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  switchView(): void {
    this.simpleView = !this.simpleView;
  }

  getAllPokemons(): void {
    this.pokemons = this.pokemonsService.getAllPokemons();
  }

  onChanged(id: number): void {
    const pokemon = this.pokemonsService.getPokemonById(id);
    pokemon.isCaught = !pokemon.isCaught;
    console.log(`Pokemon ${pokemon.name} ${pokemon.isCaught ? 'is caught' : 'is free'}`);
  }
}
