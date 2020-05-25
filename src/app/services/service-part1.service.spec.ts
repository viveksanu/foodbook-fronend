import { TestBed } from '@angular/core/testing';

import { ServicePart1Service } from './service-part1.service';

describe('ServicePart1Service', () => {
  let service: ServicePart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
