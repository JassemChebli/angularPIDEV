import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDepartmentsComponent } from './my-departments.component';

describe('MyDepartmentsComponent', () => {
  let component: MyDepartmentsComponent;
  let fixture: ComponentFixture<MyDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
