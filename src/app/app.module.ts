import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import your standalone component
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';  // Adjust the path as necessary
import { AppComponent } from './app.component';  // Main app component
import { FinanceService } from './services/finance.service';
import { RouterModule } from '@angular/router'
@NgModule({
  
  imports: [
    RouterModule,
    FinanceDashboardComponent,
    StocksComponent,
    FormsModule,
    AppComponent,
    BrowserModule,  // Import the BrowserModule
    FeaturedProjectsComponent  // Import the standalone component directly here
  ],
  providers: [
    FinanceService,
    provideHttpClient()
  ]
})
export class AppModule { }
