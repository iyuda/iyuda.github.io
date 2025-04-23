import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDashboard2Component } from './finance-dashboard2.component';

describe('FinanceDashboard2Component', () => {
  let component: FinanceDashboard2Component;
  let fixture: ComponentFixture<FinanceDashboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceDashboard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
