import { Signal } from "@angular/core";
import { CreateInfiniteQueryResult } from "@tanstack/angular-query-experimental";
import { InfiniteData } from "@tanstack/angular-query-experimental";

export interface ImageData {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

export type Titles = {
  title: string;
  type: string;
}

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageData;
    webp: ImageData;
  };
  titles: Titles[];
  type: string | null;
  status: string | null;
  score: number | null;
  rank: number | null;
  synopsis: string | null;
  year: number | null;
  genres: Genre[];
}

export type AnimeListResponse = {
  data: Anime[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    }
  }
}

export type AnimeColumn = {
  data: Signal<Anime[]>;
  type: string;
  totalCount: Signal<number>;
  query: CreateInfiniteQueryResult<InfiniteData<unknown>>
}

export type AnimeTypes = 'tv' | 'movie' | 'ova' | 'special';

export type AnimeListRequest = {
  page: number;
  type: AnimeTypes;
}
