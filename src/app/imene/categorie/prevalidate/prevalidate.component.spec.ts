import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevalidateComponent } from './prevalidate.component';

describe('PrevalidateComponent', () => {
  let component: PrevalidateComponent;
  let fixture: ComponentFixture<PrevalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
