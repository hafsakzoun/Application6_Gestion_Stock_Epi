import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultUserAreaComponent } from './consult-user-area.component';

describe('ConsultUserAreaComponent', () => {
  let component: ConsultUserAreaComponent;
  let fixture: ComponentFixture<ConsultUserAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultUserAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultUserAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
