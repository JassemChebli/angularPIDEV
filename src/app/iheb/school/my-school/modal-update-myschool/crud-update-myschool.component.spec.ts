import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateMyschoolComponent } from './crud-update-myschool.component';

describe('CrudModalComponent', () => {
  let component: CrudUpdateMyschoolComponent;
  let fixture: ComponentFixture<CrudUpdateMyschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUpdateMyschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateMyschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
