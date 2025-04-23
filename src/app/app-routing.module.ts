import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
// import { FinanceDashboardComponent } from './pages/page-finance-dashboard/page-finance-dashboard.component';
import { FinanceDashboard2Component } from './components/finance-dashboard2/finance-dashboard2.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'finance-dashboard2', component: FinanceDashboard2Component },
    // catch-all route
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule {}
