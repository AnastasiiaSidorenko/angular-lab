import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-text',
  templateUrl: './pokemon-text.component.html',
  styleUrls: ['./pokemon-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonTextComponent extends PokemonCardComponent { }
