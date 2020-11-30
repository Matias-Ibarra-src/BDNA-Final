import { TestBed } from '@angular/core/testing';

import { NoticiasProviderService } from './noticias-provider.service';

describe('NoticiasProviderService', () => {
  let service: NoticiasProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
