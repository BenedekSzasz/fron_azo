import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PositionService } from '../shared/position-service';
import { Position } from '../interfaces/position';

@Component({
  selector: 'app-position-component',
  imports: [ReactiveFormsModule],
  templateUrl: './position-component.html',
  styleUrl: './position-component.css',
})
export class PositionComponent {
  positionApi = inject(PositionService);
  builder = inject(FormBuilder);
  positions = signal<Position[]>([])

  positionForm = this.builder.group({
    id: [null as number | null],
    name: [''],
    description: ['']

  });

  addMode = true
  visibleModal = false

  ngOnInit() {
    console.log('kezdődik...')
    this.getPositions()
  }
  getPositions() {
    this.positionApi.getPositions().subscribe({
      next: (res: any) => {
        console.log(res)
        this.positions.set(res.data)
       },
      error: () => { }
    })  
  }
  savePosition() {
    console.log('Mentés...')
    if(this.addMode) {
      this.createPosition()
    } else {
      this.updatePosition()
    }
    this.startHideModal()
  }

  createPosition() {}
  editPosition() {}
  updatePosition() {}
  deletePosition() {}

  showModal() {
    this.visibleModal = true
  }
  startHideModal() {
    this.visibleModal = false
    this.positionForm.reset()
    this.addMode = true
  }
}
