import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { faCoffee ,faBrush} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import the FontAwesomeModule


@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule,FontAwesomeModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  template: `<i class="fa-brands fa-java"></i>`,

})
export class LandingPageComponent {
faCoffee = faCoffee;

}
