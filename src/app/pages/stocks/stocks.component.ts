import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../../services/finance.service';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})

export class StocksComponent implements OnInit {

  stockSymbol: string = '';  
  stockData: any = null;  
  constructor(private financeService: FinanceService) {console.log('StocksComponent loaded');}

  ngOnInit(): void {
    console.log('StocksComponent init');
    // this.loadTopGainers();
  }

  getStockData(): void {
    if (this.stockSymbol) {
      this.financeService.getStockPrice(this.stockSymbol).subscribe({
        next: (data) => {
          this.stockData = {
            symbol: this.stockSymbol.toUpperCase(),
            price: data.body.primaryData.lastSalePrice,
            change: data.body.primaryData.netChange,
            percentageChange: data.body.primaryData.percentageChange
          };
        },
        error: (err) => {
          console.error('Failed to fetch stock data:', err);
          this.stockData = null;
        }
      });
    } else {
      this.stockData = null;
    }
  }
  
  
  searchStock(): void {
    if (this.stockSymbol) {
      this.financeService.getStockPrice(this.stockSymbol).subscribe({
        next: (data) => {
          this.stockData = {
            symbol: this.stockSymbol.toUpperCase(),
            price: data.body.primaryData.lastSalePrice,
            change: data.body.primaryData.netChange,
            percentageChange: data.body.primaryData.percentageChange
          };
        },
        error: (err) => {
          console.error('Error fetching stock data:', err);
          this.stockData = {
            symbol: 'Error fetching stock data',
            price: null,
            change: null,
            percentageChange: null
          };
        }
      });
    } else {
      this.stockData = null;
    }
  }
  
}
