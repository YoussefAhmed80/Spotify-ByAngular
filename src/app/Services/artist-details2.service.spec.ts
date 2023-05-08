import { TestBed } from '@angular/core/testing';

import { ArtistDetails2Service } from './artist-details2.service';

describe('ArtistDetails2Service', () => {
  let service: ArtistDetails2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistDetails2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
