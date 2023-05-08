import { TestBed } from '@angular/core/testing';

import { LikesserviceService } from './likesservice.service';

describe('LikesserviceService', () => {
  let service: LikesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
