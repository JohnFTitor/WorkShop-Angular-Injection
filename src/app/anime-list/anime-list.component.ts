import { Component, computed, signal } from '@angular/core';
import { AnimeColumn } from '../../types';
import { AnimeColumnComponent } from '../anime-column/anime-column.component';
@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [AnimeColumnComponent],
  templateUrl: './anime-list.component.html',
})
export class AnimeListComponent {
  protected animeColumns = computed<AnimeColumn[]>(() => {
    return [
      {
        data: [],
        type: 'tv',
        totalCount: 0,
      },
      {
        data: [],
        type: 'movie',
        totalCount: 0,
      },
      {
        data: [],
        type: 'ova',
        totalCount: 0,
      },
      {
        data: [],
        type: 'special',
        totalCount: 0,
      },
    ];
  });
}

