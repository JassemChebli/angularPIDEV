import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPfeComponent } from './my-pfe.component';

describe('MyPfeComponent', () => {
  let component: MyPfeComponent;
  let fixture: ComponentFixture<MyPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
