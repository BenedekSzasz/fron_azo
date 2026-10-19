import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {

  builder = inject(FormBuilder)

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

    this.toggleModal()
  }
}
