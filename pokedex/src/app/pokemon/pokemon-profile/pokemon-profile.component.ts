import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemon = this.pokemonsService.getPokemonById(+params.get('pokemonId'));
    });
  }

  catchPokemon(): void {
    this.pokemon.isCaught = !this.pokemon.isCaught;
    console.log(`Pokemon ${this.pokemon.name} ${this.pokemon.isCaught ? 'is caught' : 'is free'}`);
  }
}
