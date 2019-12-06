import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogCategorieComponent } from './confirmation-dialog-categorie.component';

describe('ConfirmationDialogCategorieComponent', () => {
  let component: ConfirmationDialogCategorieComponent;
  let fixture: ComponentFixture<ConfirmationDialogCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
