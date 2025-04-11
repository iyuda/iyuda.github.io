import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../footer/footer.component";
import { SkillsComponent } from "../skills/skills.component";
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-home',
  imports: [ExperienceComponent, HomeComponent, AboutComponent, ContactComponent,ResumeComponent, SkillsComponent, FooterComponent,  FeaturedProjectsComponent],  // Import NavbarComponent here
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
