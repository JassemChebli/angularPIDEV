import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateDepComponent } from './crud-update-dep.component';

describe('CrudModalComponent', () => {
  let component: CrudUpdateDepComponent;
  let fixture: ComponentFixture<CrudUpdateDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUpdateDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
