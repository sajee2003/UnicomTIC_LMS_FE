import { Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { LandingPageComponent } from './components/shared/landing_page/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route
    { path: 'login', component: LoginComponent }
]  