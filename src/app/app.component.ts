import { Component } from '@angular/core';

import { SidebarComponent } from './components/shared/sidebar/sidebar.component';


import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { LandingPageComponent } from './components/shared/landing_page/landing-page/landing-page.component';
import { RegisterComponent } from './components/shared/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnicomTIC_LMS_FE';
}
