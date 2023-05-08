import { TestBed } from '@angular/core/testing';

import { CategoryAlbumsongserviceService } from './category-albumsongservice.service';

describe('CategoryAlbumsongserviceService', () => {
  let service: CategoryAlbumsongserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAlbumsongserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
