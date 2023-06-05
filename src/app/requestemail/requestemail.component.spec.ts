import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestemailComponent } from './requestemail.component';

describe('RequestemailComponent', () => {
  let component: RequestemailComponent;
  let fixture: ComponentFixture<RequestemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
