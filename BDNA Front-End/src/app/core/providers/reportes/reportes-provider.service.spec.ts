import { TestBed } from '@angular/core/testing';

import { ReportesProviderService } from './reportes-provider.service';

describe('ReportesProviderService', () => {
  let service: ReportesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
