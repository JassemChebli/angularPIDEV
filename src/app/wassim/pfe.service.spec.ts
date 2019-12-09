import { TestBed } from '@angular/core/testing';

import { PfeService } from './pfe.service';

describe('PfeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfeService = TestBed.get(PfeService);
    expect(service).toBeTruthy();
  });
});
