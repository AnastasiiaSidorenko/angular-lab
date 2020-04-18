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
  @Output() changed = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchButton(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.changed.emit(id);
  }

  goToEditForm(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([`pokemons/${id}/edit`]);
  }
}
