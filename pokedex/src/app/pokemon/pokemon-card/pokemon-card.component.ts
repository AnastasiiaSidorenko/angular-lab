import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  setFreeButton = false;
  @Input() pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  switchButton(name) {
    this.setFreeButton = !this.setFreeButton;
    console.log(`Pokemon ${name} ${this.setFreeButton ? 'is caught' : 'is free'}`);
  }

}
