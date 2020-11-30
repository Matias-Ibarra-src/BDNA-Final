import { TestBed } from '@angular/core/testing';

import { UsuarioProviderService } from './usuario-provider.service';

describe('UsuarioProviderService', () => {
  let service: UsuarioProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
