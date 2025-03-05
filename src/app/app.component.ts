import { Component } from '@angular/core';

import { SidebarComponent } from './components/shared/sidebar/sidebar.component';


import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterStudentComponent } from './components/student/register/register-student/register-student.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,LoginComponent,RegisterStudentComponent,SidebarComponent],



  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnicomTIC_LMS_FE';
}
