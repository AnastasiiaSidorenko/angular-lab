import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  setFreeButton = false;
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  switchButton(name): void {
    this.setFreeButton = !this.setFreeButton;
    console.log(`Pokemon ${name} ${this.setFreeButton ? 'is caught' : 'is free'}`);
  }

}
