import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  imports: [],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  monthlyAttendance: number = 85;  // Example attendance percentage
  nextClassTime: string = 'March 15, 2025 at 10:00 AM';  // Example next class time
  currentTime: string = '';

  constructor() { }

  ngOnInit(): void {
    // Update the current time every second
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
    
    this.updateCurrentTime();
  }

  // Method to update the current time
  updateCurrentTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();  // You can customize the format as needed
  }
}