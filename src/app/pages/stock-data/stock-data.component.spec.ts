import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataComponent } from './stock-data.component';

describe('FinanceDashboardComponent', () => {
  let component: StockDataComponent;
  let fixture: ComponentFixture<StockDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
