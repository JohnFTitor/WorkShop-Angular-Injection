import { Component, computed, input } from '@angular/core';
import { Anime } from '../../types';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [],
  templateUrl: './anime-card.component.html',
})
export class AnimeCardComponent {
  anime = input.required<Anime>();

  animeTitle = computed(() => {
    if (this.anime().titles.length > 0) {
      return this.anime().titles[0].title;
    }

    return 'Unknown';
  });
}
