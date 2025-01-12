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
        data: [
          {
            mal_id: 1,
            url: 'https://example.com',
            titles: [
              {
                title: 'Anime 1',
                type: 'tv',
              },
            ],
            type: 'tv',
            status: 'airing',
            score: 8.5,
            rank: 1,
            synopsis:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            year: 2021,
            genres: [
              {
                mal_id: 1,
                type: 'genre',
                name: 'Action',
                url: 'https://example.com',
              },
              {
                mal_id: 2,
                type: 'genre',
                name: 'Adventure',
                url: 'https://example.com',
              },
            ],
            images: {
              jpg: {
                image_url: 'https://picsum.photos/id/237/200/300',
                small_image_url: 'https://example.com',
                large_image_url: 'https://example.com',
              },
              webp: {
                image_url: 'https://example.com',
                small_image_url: 'https://example.com',
                large_image_url: 'https://example.com',
              },
            },
          },
        ],
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
