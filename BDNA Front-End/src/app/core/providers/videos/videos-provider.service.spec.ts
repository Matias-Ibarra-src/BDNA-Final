import { TestBed } from '@angular/core/testing';

import { VideosProviderService } from './videos-provider.service';

describe('VideosProviderService', () => {
  let service: VideosProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
