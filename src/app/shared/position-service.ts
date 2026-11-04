import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Position } from '../interfaces/position';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  http = inject(HttpClient);
  host = 'http://localhost:8000/api';

  getPositions() {
    const url = `${this.host}/positions`;
    return this.http.get<Position[]>(url);
  }

}
