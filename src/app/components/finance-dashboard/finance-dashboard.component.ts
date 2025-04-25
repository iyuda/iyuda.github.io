import { Component } from '@angular/core';
import { StockDataComponent } from '../../pages/stock-data/stock-data.component';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [StockDataComponent],
  templateUrl: './finance-dashboard.component.html',
  styleUrl: './finance-dashboard.component.scss'
})
export class FinanceDashboardComponent {

}
 