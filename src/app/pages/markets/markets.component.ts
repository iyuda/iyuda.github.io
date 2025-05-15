import { Component } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss'],
  standalone: true,
  imports: []
})
export class MarketsComponent  {
  marketSummary: any[] = [];
  loading = true;
  error: any;

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.loadMarketData();
  }
  loadMarketData(): void {
    this.financeService.getMarketData().subscribe({
      next: (response: any) => {
        this.marketSummary = response?.body || [];
      },
      error: (err) => {
        console.error('Error loading market summary:', err);
      }
    });
  }
}
