import { TestBed } from '@angular/core/testing';

import { ComentarioProviderService } from './comentario-provider.service';

describe('ComentarioProviderService', () => {
  let service: ComentarioProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
