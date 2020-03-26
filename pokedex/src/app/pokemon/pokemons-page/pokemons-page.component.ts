import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {
  simpleView = false;
  pokemons = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 0
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 0
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 0
    },
    {
      name: 'charmander',
      id: 4,
      damage: 0
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 0
    },
    {
      name: 'charizard',
      id: 6,
      damage: 0
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 0
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 0
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 0
    },
    {
      name: 'caterpie',
      id: 10,
      damage: 0
    },
    {
      name: 'metapod',
      id: 11,
      damage: 0
    },
    {
      name: 'butterfree',
      id: 12,
      damage: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  switchView() {
    this.simpleView = !this.simpleView;
  }
}
