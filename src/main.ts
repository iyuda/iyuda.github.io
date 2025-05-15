import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { withEnabledBlockingInitialNavigation } from '@angular/router';
import { withComponentInputBinding } from '@angular/router';



bootstrapApplication(AppComponent, {
  providers: [ provideHttpClient(withFetch()), provideRouter(routes,withEnabledBlockingInitialNavigation(), withComponentInputBinding())]
}).catch(err => console.error(err));
