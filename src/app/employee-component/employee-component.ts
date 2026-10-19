import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/employee-service';

@Component({
  selector: 'app-employee-component',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {

  builder = inject(FormBuilder)
  employeeService = inject(EmployeeService)

  employees!: any[]

  employeeForm = this.builder.group({
    name: [''],
    city: [''],
    salary: [''],
    positionId: ['']
  })

  visibleModal = false

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        console.log(res);
        this.employees = res.data
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  toggleModal() {
    this.visibleModal = ! this.visibleModal
  }

  hideModal() {
    this.visibleModal = false
  }

  saveEmployee() {
    console.log("Mentés...");
    this.createEmployee();
    this.toggleModal()
  }

  createEmployee() {
    // szolgáltatás hívása
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
