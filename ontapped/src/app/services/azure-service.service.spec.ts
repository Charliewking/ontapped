import { TestBed } from '@angular/core/testing';

import { AzureServiceService } from './azure-service.service';

describe('AzureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzureServiceService = TestBed.get(AzureServiceService);
    expect(service).toBeTruthy();
  });
});
