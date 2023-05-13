import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultByAreaComponent } from './consult-by-area.component';

describe('ConsultByAreaComponent', () => {
  let component: ConsultByAreaComponent;
  let fixture: ComponentFixture<ConsultByAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultByAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
