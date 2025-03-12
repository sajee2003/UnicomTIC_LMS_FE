import { Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { LandingPageComponent } from './components/shared/landing_page/landing-page/landing-page.component';
import { StudentDashboardComponent } from './components/student/dashboard/student-dashboard/student-dashboard.component';
import { RegisterComponent } from './components/shared/register/register.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route
    { path: 'login', component: LoginComponent },
    { path: 'studentdash', component: StudentDashboardComponent },
    { path: 'studentregister', component: RegisterComponent },


]  