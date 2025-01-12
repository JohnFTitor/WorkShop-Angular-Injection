import { Component, computed, inject, signal} from '@angular/core';
import { AnimeColumn, AnimeTypes } from '../../types';
import { AnimeColumnComponent } from '../anime-column/anime-column.component';

import { AnimeListServiceService } from '../anime-list-service.service';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [AnimeColumnComponent],
  templateUrl: './anime-list.component.html',
})
export class AnimeListComponent {
  private animeListService = inject(AnimeListServiceService);
  protected animeTypes = signal<AnimeTypes[]>(['tv', 'movie', 'ova', 'special']);

  protected animeColumns = computed<AnimeColumn[]>(() => {
    return this.animeTypes().map((type) => {
      const animeListQueryService = this.animeListService.getAnimeListQueryService({ type, page: 1 });

      const queryData = animeListQueryService.data();

      const data = queryData?.pages.flatMap((page) => page.data) ?? [];

      const totalCount = queryData?.pages[0].pagination.items.total ?? 0;

      return {
        type,
        data,
        totalCount,
      };
    });
  });
}
