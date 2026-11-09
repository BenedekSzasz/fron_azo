import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/employee-service';
import { Position } from '../interfaces/position';
import { PositionService } from '../shared/position-service';
import { PositionNamePipe } from '../shared/pipe/position-name-pipe';

@Component({
  selector: 'app-employee-component',
  imports: [ReactiveFormsModule, PositionNamePipe],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {

  builder = inject(FormBuilder)
  employeeService = inject(EmployeeService)
  positionsApi = inject(PositionService)

  employees!: any[]
  positions = signal<Position[]>([])

  employeeForm = this.builder.group({
    name: [''],
    city: [''],
    salary: [''],
    positionId: ['']
  })

  visibleModal = false
  addMode = true

  ngOnInit() {
    console.log("Kezdés.....");
    this.getEmployees();
    this.getPositions();
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

  getPositions() {
    this.positionsApi.getPositions().subscribe({
      next: (res: any) => {
        console.log(res);
        this.positions.set(res.data)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  editEmployee() {
    
  }
}
