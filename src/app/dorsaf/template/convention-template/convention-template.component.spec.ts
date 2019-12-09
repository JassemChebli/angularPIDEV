import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionTemplateComponent } from './convention-template.component';

describe('ConventionTemplateComponent', () => {
  let component: ConventionTemplateComponent;
  let fixture: ComponentFixture<ConventionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
