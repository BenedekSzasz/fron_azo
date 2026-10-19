import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  builder = inject(FormBuilder);
  loginForm = this.builder.group({
    name: [''],
    password: ['']
  })

  login() {
    console.log("Belépés.....");
    console.log(this.loginForm.value);
  }
}
