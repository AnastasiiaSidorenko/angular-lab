import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() changed = new EventEmitter<Pokemon>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  catchPokemon(pokemon: Pokemon, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.changed.emit(pokemon);
  }

  goToEditForm(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([`pokemons/${id}/edit`]);
  }
}
