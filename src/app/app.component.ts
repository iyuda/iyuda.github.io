import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';  // Import NavbarComponent
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, FeaturedProjectsComponent, RouterModule],  // Import NavbarComponent here
})
export class AppComponent {
  title = 'iyuda-portfolio';
}
