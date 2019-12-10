import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateSiteComponent } from './crud-update-site.component';

describe('CrudModalComponent', () => {
  let component: CrudUpdateSiteComponent;
  let fixture: ComponentFixture<CrudUpdateSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUpdateSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
