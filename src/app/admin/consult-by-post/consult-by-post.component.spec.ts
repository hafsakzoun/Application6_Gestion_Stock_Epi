import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultByPostComponent } from './consult-by-post.component';

describe('ConsultByPostComponent', () => {
  let component: ConsultByPostComponent;
  let fixture: ComponentFixture<ConsultByPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultByPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultByPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
