import { Component, computed, inject, signal, untracked } from '@angular/core';
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

  protected animeTypes = signal<AnimeTypes[]>([
    'tv',
    'movie',
    'ova',
  ]);

  private createAnimeColumn(type: AnimeTypes): AnimeColumn {
    const query =
      this.animeListService.getAnimeListQueryService(
        { type, page: 1 },
      );

    const data = computed(
      () =>
        query.data()?.pages.flatMap((page) => page.data) ?? []
    );

    const totalCount = computed(
      () => query.data()?.pages[0].pagination.items.total ?? 0
    );

    return {
      type,
      data,
      totalCount,
      query,
    };
  }

  protected animeColumns = computed<AnimeColumn[]>(() => {
    return untracked(() =>
      this.animeTypes().map((type) => this.createAnimeColumn(type))
    );
  });

  onScrolledToBottom(type: string) {
    const column = this.animeColumns().find((column) => column.type === type);

    if (
      column &&
      !column.query.isFetchingNextPage() &&
      column.query.hasNextPage()
    ) {
      column.query.fetchNextPage();
    }
  }
}
