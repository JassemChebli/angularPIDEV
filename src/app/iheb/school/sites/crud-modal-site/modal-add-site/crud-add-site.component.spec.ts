import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddSiteComponent } from './crud-add-site.component';

describe('CrudModalComponent', () => {
  let component: CrudAddSiteComponent;
  let fixture: ComponentFixture<CrudAddSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAddSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAddSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
