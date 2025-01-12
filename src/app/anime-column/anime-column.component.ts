import { Component, input } from '@angular/core';
import { AnimeColumn } from '../../types';

@Component({
  selector: 'app-anime-column',
  standalone: true,
  imports: [],
  templateUrl: './anime-column.component.html',
})
export class AnimeColumnComponent {
  animeColumn = input.required<AnimeColumn>();
}
