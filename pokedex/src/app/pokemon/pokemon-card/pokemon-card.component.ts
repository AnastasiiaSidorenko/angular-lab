import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  setFreeButton = false;
  @Input() pokemon: Pokemon;

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  switchButton(name: string): void {
    this.setFreeButton = !this.setFreeButton;
    this.onChanged.emit(`Pokemon ${name} ${this.setFreeButton ? 'is caught' : 'is free'}`);
  }

}
