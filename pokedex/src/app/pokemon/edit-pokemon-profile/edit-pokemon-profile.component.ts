import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-edit-pokemon-profile',
  templateUrl: './edit-pokemon-profile.component.html',
  styleUrls: ['./edit-pokemon-profile.component.scss']
})
export class EditPokemonProfileComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pokemon = this.pokemonsService.getPokemonById(+params.get('pokemonId'));
      this.pokemon = {
        ...pokemon
      };
    });
  }

  saveChanges(): void {
    this.pokemonsService.updatePokemon(this.pokemon);
  }

  cancelChanges(): void { }
}
