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

  employeeForm = this.builder.group({
    name: [''],
    city: [''],
    salary: [''],
    positionId: ['']
  })

  visibleModal = false

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
