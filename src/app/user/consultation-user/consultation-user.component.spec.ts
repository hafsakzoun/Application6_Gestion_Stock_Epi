import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationUserComponent } from './consultation-user.component';

describe('ConsultationUserComponent', () => {
  let component: ConsultationUserComponent;
  let fixture: ComponentFixture<ConsultationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
