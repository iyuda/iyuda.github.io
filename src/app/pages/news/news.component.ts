import { Component } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule]
})
export class NewsComponent  {
  newsItems: any[] = [];
  loading = true;
  error: any;

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.loadNewsData();
    
  }

  loadNewsData(): void {
    this.loading = true;
    this.financeService.getNewsData().subscribe({
      next: (response: any) => {
        this.loading = false;
        this.newsItems = response?.body || [];
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading news summary:', err);
      }
    });
  }
}
