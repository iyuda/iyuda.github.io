import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';
import { StocksComponent } from './pages/stocks/stocks.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'featured-projects', component: FeaturedProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'finance-dashboard', 
    component: FinanceDashboardComponent,
    children: [
      {
        path: 'stocks',
        loadComponent: () => import('./pages/stocks/stocks.component').then(m => m.StocksComponent)
      },
      {
        path: 'stock-data',
        loadComponent: () => import('./pages/stock-data/stock-data.component').then(m => m.StockDataComponent)
      },
      {
        path: 'gainers-losers',
        loadComponent: () => import('./pages/gainers-losers/gainers-losers.component').then(m => m.GainersLosersComponent)
      },
      {
        path: 'markets',
        loadComponent: () => import('./pages/markets/markets.component').then(m => m.MarketsComponent)
      },
      {
        path: 'news',
        loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
      }
    ]
   },
  
  { path: '**', component: PagenotfoundComponent },
];

