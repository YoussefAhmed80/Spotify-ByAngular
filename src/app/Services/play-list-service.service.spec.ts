import { TestBed } from '@angular/core/testing';

import { PlayListServiceService } from './play-list-service.service';

describe('PlayListServiceService', () => {
  let service: PlayListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
