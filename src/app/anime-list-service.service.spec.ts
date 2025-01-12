import { TestBed } from '@angular/core/testing';

import { AnimeListServiceService } from './anime-list-service.service';

describe('AnimeListServiceService', () => {
  let service: AnimeListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
