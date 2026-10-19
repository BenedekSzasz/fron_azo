import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  builder = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm = this.builder.group({
    name: ['Zöld Marianna', Validators.required],
    password: ['titok', Validators.required]
  })

  login() {
    console.log("Belépés.....");
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data.accessToken);
        localStorage.setItem("token", data.accessToken);
      },
      error: (err) => {
        console.error(err);
      }
    });

  }
}
