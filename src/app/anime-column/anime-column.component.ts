import { Component, input } from '@angular/core';
import { AnimeColumn } from '../../types';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
@Component({
  selector: 'app-anime-column',
  standalone: true,
  imports: [AnimeCardComponent],
  templateUrl: './anime-column.component.html',
})
export class AnimeColumnComponent {
  animeColumn = input.required<AnimeColumn>();
}
