import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  // ✅ Import NgFor

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [NgFor],  // ✅ Include NgFor
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'ItorahAdmin (Blazor Web Application)',
      tech: 'Blazor Server, .NET Core, Syncfusion, SQL Server',
      description: 'Developed a full-stack Blazor application for managing special guides, PDFs, and categories.',
      features: ['Built a responsive UI', 'Designed efficient database structures', 'Implemented role-based access'],
      impact: 'Improved content accessibility and usability.'
    },
    {
      title: 'Personal Portfolio Website',
      tech: 'Angular 19, TypeScript, SCSS, GitHub Pages',
      description: 'Created a modern, single-page portfolio website to showcase projects, skills, and experience.',
      features: [
        'Fully responsive layout with smooth scrolling',
        'Top navigation bar that stays on scroll',
        'Modular, standalone Angular components',
        'Deployed to GitHub Pages with custom styling'
      ],
      impact: 'Improved online presence and simplified sharing of professional background.'
    }
    
  ];
}
