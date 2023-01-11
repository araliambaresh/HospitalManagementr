import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppointmentHistoryComponent } from './user-appointment-history.component';

describe('UserAppointmentHistoryComponent', () => {
  let component: UserAppointmentHistoryComponent;
  let fixture: ComponentFixture<UserAppointmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppointmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
