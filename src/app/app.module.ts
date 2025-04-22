import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import your standalone component
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';  // Adjust the path as necessary
import { AppComponent } from './app.component';  // Main app component
import { FinanceService } from './services/finance.service';

@NgModule({
  imports: [
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
