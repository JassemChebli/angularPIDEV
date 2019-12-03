import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentNotificationsListComponent } from './all-student-notifications-list.component';

describe('AllStudentNotificationsListComponent', () => {
  let component: AllStudentNotificationsListComponent;
  let fixture: ComponentFixture<AllStudentNotificationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentNotificationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentNotificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
