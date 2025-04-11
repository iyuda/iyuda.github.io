import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';  // Import NavbarComponent
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ExperienceComponent } from "./components/experience/experience.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ResumeComponent } from "./components/resume/resume.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent,  RouterModule, ExperienceComponent, HomeComponent, AboutComponent, ContactComponent,ResumeComponent, SkillsComponent, FooterComponent,  FeaturedProjectsComponent],  // Import NavbarComponent here
})
export class AppComponent {
  title = 'iyuda-portfolio';
}
