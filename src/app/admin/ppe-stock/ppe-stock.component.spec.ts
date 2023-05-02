import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeStockComponent } from './ppe-stock.component';

describe('PpeStockComponent', () => {
  let component: PpeStockComponent;
  let fixture: ComponentFixture<PpeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpeStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
