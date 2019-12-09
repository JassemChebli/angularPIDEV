import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfemodificationComponent } from './pfemodification.component';

describe('PfemodificationComponent', () => {
  let component: PfemodificationComponent;
  let fixture: ComponentFixture<PfemodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfemodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfemodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
