import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './finance-dashboard.component.html',
  styleUrl: './finance-dashboard.component.scss'
})
export class FinanceDashboardComponent {
  constructor() {console.log('FinanceDashboardComponent loaded');}

}
 