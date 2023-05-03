import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsultationComponent } from './user-consultation.component';

describe('UserConsultationComponent', () => {
  let component: UserConsultationComponent;
  let fixture: ComponentFixture<UserConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
