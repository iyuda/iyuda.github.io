import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import your standalone component
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';  // Adjust the path as necessary
import { AppComponent } from './app.component';  // Main app component

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,  // Import the BrowserModule
    FeaturedProjectsComponent  // Import the standalone component directly here
  ]
})
export class AppModule { }
