import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  http = inject(HttpClient);
  host = 'http://localhost:8000/api/'

  getEmployees() {
    const url = this.host + 'employees';
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.get(url, { headers });
  }

  createEmployee(employee: any) {
    const url = this.host + 'employees';
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.post(url, employee, { headers });
  }

  updateEmployee(employee: any) {
    const url = this.host + 'employees/' + employee.id;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.put(url, employee, { headers });
  }

}
