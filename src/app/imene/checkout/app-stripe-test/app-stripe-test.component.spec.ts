import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStripeTestComponent } from './app-stripe-test.component';

describe('AppStripeTestComponent', () => {
  let component: AppStripeTestComponent;
  let fixture: ComponentFixture<AppStripeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStripeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStripeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
