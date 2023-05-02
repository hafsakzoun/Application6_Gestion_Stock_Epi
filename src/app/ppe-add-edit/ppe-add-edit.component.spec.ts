import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeAddEditComponent } from './ppe-add-edit.component';

describe('PpeAddEditComponent', () => {
  let component: PpeAddEditComponent;
  let fixture: ComponentFixture<PpeAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpeAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
