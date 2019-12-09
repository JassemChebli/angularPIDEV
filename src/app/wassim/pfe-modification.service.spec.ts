import { TestBed } from '@angular/core/testing';

import { PfeModificationService } from './pfe-modification.service';

describe('PfeModificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfeModificationService = TestBed.get(PfeModificationService);
    expect(service).toBeTruthy();
  });
});
