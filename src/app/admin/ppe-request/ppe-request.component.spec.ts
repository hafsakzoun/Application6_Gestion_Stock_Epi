import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeRequestComponent } from './ppe-request.component';

describe('PpeRequestComponent', () => {
  let component: PpeRequestComponent;
  let fixture: ComponentFixture<PpeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
