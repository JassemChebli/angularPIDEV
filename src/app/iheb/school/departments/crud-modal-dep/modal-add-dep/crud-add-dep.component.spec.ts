import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddDepComponent } from './crud-add-dep.component';

describe('CrudModalComponent', () => {
  let component: CrudAddDepComponent;
  let fixture: ComponentFixture<CrudAddDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAddDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAddDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
