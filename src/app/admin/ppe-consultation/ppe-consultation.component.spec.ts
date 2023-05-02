import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeConsultationComponent } from './ppe-consultation.component';

describe('PpeConsultationComponent', () => {
  let component: PpeConsultationComponent;
  let fixture: ComponentFixture<PpeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpeConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
