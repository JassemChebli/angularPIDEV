import { TestBed } from '@angular/core/testing';

import { ConfirmationDialogCategorieService } from './confirmation-dialog-categorie.service';

describe('ConfirmationDialogCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmationDialogCategorieService = TestBed.get(ConfirmationDialogCategorieService);
    expect(service).toBeTruthy();
  });
});
