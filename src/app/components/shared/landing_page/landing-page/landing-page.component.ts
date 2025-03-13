import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faCoffee ,faBrush} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import the FontAwesomeModule
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  template: `<i class="fa-brands fa-java"></i>`,

})
export class LandingPageComponent {
  images: string[] = [
    '/ai-generated-portrait-of-a-smiling-schoolgirl-using-laptop-in-classroom-at-school-photo\ \(1\).jpg',
    '/banner_3.png',
    '/cap2.png',
  ];
  currentIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
