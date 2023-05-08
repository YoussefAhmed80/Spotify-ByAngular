import { TestBed } from '@angular/core/testing';

import { PlayListsongService } from './play-listsong.service';

describe('PlayListsongService', () => {
  let service: PlayListsongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayListsongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
