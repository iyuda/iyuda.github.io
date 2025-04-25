import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../../services/finance.service';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-stock-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {
  topGainers: any[] = [];
  topLosers: any[] = [];
  stockSymbol: string = '';  
  stockData: any = null;  
  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.loadTopGainers();
  }

  loadTopGainers(): void {
    this.financeService.getTopGainers().subscribe({
      next: (response: any) => {
        this.topGainers = response?.finance?.result?.[0]?.quotes || [];
      },
      error: (err) => {
        console.error('Error loading top gainers:', err);
      }
    });
  }
  loadTopLosers(): void {
    this.financeService.getTopLosers().subscribe({
      next: (response: any) => {
        this.topLosers = response?.finance?.result?.[0]?.quotes || [];
      },
      error: (err) => {
        console.error('Error loading top gainers:', err);
      }
    });
  }
  getStockData(): void {
    if (this.stockSymbol) {
      // Simulate an API call to fetch stock data (replace with your real API call)
      // For demonstration, we're using a mock object.
      this.stockData = {
        symbol: this.stockSymbol,
        price: 150.25,
        change: 2.35,
        percentageChange: 1.59
      };
    } else {
      this.stockData = null;
    }
  }
  searchStock(): void {
    if (this.stockSymbol) {
      // Simulate fetching stock data (replace with actual API call)
      this.stockData = {
        symbol: this.stockSymbol,
        price: 150.25,
        change: 2.35,
        percentageChange: 1.59
      };
    } else {
      this.stockData = null;
    }
  }
}
