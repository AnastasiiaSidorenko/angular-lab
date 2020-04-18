import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SaveModalComponent } from '../save-modal/save-modal.component';

@Component({
  selector: 'app-edit-pokemon-profile',
  templateUrl: './edit-pokemon-profile.component.html',
  styleUrls: ['./edit-pokemon-profile.component.scss']
})
export class EditPokemonProfileComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private modalService: BsModalService
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
    const initialState = {
      id: this.pokemon.id
    };
    this.modalService.show(SaveModalComponent, { class: 'modal-sm', initialState });
  }

  cancelChanges(): void { }
}
