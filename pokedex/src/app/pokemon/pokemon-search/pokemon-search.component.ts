import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();
  pokemonName = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchButton(): void {
    this.changed.emit(this.pokemonName);
  }
}
