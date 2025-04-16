import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  // ✅ Import NgFor
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [NgFor, CommonModule],  // ✅ Include NgFor
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
      impact: 'Improved content accessibility and usability.',
      link: 'https://github.com/iyuda/itorahadmin'
    },
    {
      title: 'Developer Portfolio (Angular 19)',
      tech: 'Angular 19, SCSS, GitHub Pages',
      description: 'Created a personal portfolio site to showcase projects and resume.',
      features: ['Responsive layout', 'Sticky navbar', 'GitHub Pages deployment'],
      impact: 'Improved professional presence and visibility.',
      link: 'https://iyuda.github.io'
    },

    {
      title: 'CEMS API Poster (REST API)',
      tech: 'C#, REST API, JSON, EMS Role Integration',
      description: 'Built a tool to post data to the CEMS system via a REST API for internal compliance logging.',
      features: ['Automated payload formatting', 'Error handling with retry logic', 'Command-line interface'],
      impact: 'Simplified communication with third-party systems and ensured data consistency.',
      link: 'https://github.com/iyuda/CEMSApiPoster'
    },
    {
      title: 'Tracks.NET Core (.Net Core MVC)',
      tech: '.NET Core, SQL Server, Custom UI Framework',
      description: 'Migrated and extended legacy tracking software for Parabit Systems using modern .NET architecture.',
      features: ['Modular structure', 'User session tracking', 'Enhanced security integration'],
      impact: 'Improved system maintainability and modernized the codebase.',
      link: 'https://github.com/iyuda/tracks.Net.Core'
    }
    
  ];
}
