import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModalSiteComponent } from './crud-modal-site.component';

describe('CrudModalComponent', () => {
  let component: CrudModalSiteComponent;
  let fixture: ComponentFixture<CrudModalSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModalSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
