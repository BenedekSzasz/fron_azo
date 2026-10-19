import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  imports: [],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {

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
