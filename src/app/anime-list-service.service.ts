import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AnimeListRequest, AnimeListResponse } from '../types';
import { lastValueFrom, map, Observable } from 'rxjs';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class AnimeListServiceService {
  private http = inject(HttpClient);

  getAnimeList(request: AnimeListRequest): Observable<AnimeListResponse> {
    const params = new HttpParams({
      fromObject: {
        ...request,
        limit: 10,
      },
    });

    return this.http.get<AnimeListResponse>(`https://api.jikan.moe/v4/anime`, {
      params,
    });
  }

  getAnimeListQueryService(request: AnimeListRequest) {
    return injectInfiniteQuery(() => ({
      queryKey: ['anime-list', request],
      queryFn: async ({ pageParam }) => {
        const page = pageParam || 1;
        const parameters = request;

        const animeListParams: AnimeListRequest = {
          ...parameters,
          page,
        };

        return lastValueFrom(
          this.getAnimeList(animeListParams).pipe(
            map((response) => {
              return {
                ...response,
                nextPage: response.pagination.has_next_page ? page + 1 : null,
              };
            })
          )
        );
      },
      getNextPageParam: (response) => response.nextPage,
      initialPageParam: 1,
      refetchOnWindowFocus: false,
    }));
  }
}
