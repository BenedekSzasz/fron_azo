import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  private _isAuthenticated = signal<boolean>(!!localStorage.getItem('token'));
  readonly isAuthenticated = this._isAuthenticated.asReadonly();


  login(user: any) {
    const url = 'http://localhost:8000/api/login';
    return this.http.post(url, user)
  }

  loginSuccess() {
    this._isAuthenticated.set(true);
  }

  logout() {
    this._isAuthenticated.set(false);
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
