import { Component } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-gainers-losers',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './gainers-losers.component.html',
  styleUrl: './gainers-losers.component.scss'
})
export class GainersLosersComponent {
  constructor(private financeService: FinanceService) {console.log('GainersLosersComponent loaded');}
  topGainers: any[] = [];
  topLosers: any[] = [];
  ngOnInit(): void {
     this.loadTopGainers();
     this.loadTopLosers();
  }

  loadTopGainers(): void {
    this.financeService.getTopGainers().subscribe({
      next: (response: any) => {
        this.topGainers = response?.body || [];
      },
      error: (err) => {
        console.error('Error loading top gainers:', err);
      }
    });
  }
  loadTopLosers(): void {
    this.financeService.getTopLosers().subscribe({
      next: (response: any) => {
        this.topLosers = response?.body || [];
      },
      error: (err) => {
        console.error('Error loading top losers:', err);
      }
    });
  }
}
