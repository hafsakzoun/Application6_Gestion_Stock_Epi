import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultUserPostComponent } from './consult-user-post.component';

describe('ConsultUserPostComponent', () => {
  let component: ConsultUserPostComponent;
  let fixture: ComponentFixture<ConsultUserPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultUserPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
