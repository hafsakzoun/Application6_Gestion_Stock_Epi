import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiscrudComponent } from './episcrud.component';

describe('EpiscrudComponent', () => {
  let component: EpiscrudComponent;
  let fixture: ComponentFixture<EpiscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpiscrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
