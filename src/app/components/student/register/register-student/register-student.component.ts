import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-register-student',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, ToastrModule, FormsModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {
isEditMode: any;
studentForm!: FormGroup<any>;
onSubmit() {
throw new Error('Method not implemented.');
}
genderOptions: any;
classes: any;
cancel() {
throw new Error('Method not implemented.');
}

}
