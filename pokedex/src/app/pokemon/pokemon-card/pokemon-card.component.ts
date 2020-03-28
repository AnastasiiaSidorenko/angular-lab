import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonState } from '../models/pokemon-state.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
  setFreeButton = false;
  @Input() pokemon: Pokemon;

  @Output() onChanged = new EventEmitter<PokemonState>();

  constructor() { }

  ngOnInit(): void {
  }

  switchButton(name: string): void {
    this.setFreeButton = !this.setFreeButton;
    this.onChanged.emit({ name: name, setFreeButton: this.setFreeButton });
  }

}
