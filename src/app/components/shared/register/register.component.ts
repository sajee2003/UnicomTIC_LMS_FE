import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent   {
  step: number = 1; // Controls step navigation
  emailForm: FormGroup;
  otpForm: FormGroup;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      nic: ['', Validators.required],
      utNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['',Validators.required]
    });
  }

  ngOnInit(): void {}

  // Simulate sending OTP and move to Step 2
  sendOtp() {
    if (this.emailForm.valid) {
      console.log('OTP sent to:', this.emailForm.value.email);
      this.step = 2;
    }
  }

  // Simulate OTP verification and move to Step 3
  verifyOtp() {
    if (this.otpForm.valid) {
      console.log('OTP Verified:', this.otpForm.value.otp);
      this.step = 3;
    }
  }

  // Simulate user registration
  register() {
    if (this.registrationForm.valid) {
      console.log('User Registered:', this.registrationForm.value);
      alert('Registration Successful!');
      this.step = 1; // Reset to Step 1 after successful registration
      this.emailForm.reset();
      this.otpForm.reset();
      this.registrationForm.reset();
    }
  }
}