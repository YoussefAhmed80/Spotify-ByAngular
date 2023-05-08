import { TestBed } from '@angular/core/testing';

import { CategoryAlbumserviceService } from './category-albumservice.service';

describe('CategoryAlbumserviceService', () => {
  let service: CategoryAlbumserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAlbumserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
