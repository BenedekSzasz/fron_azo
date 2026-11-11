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
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.get<Position[]>(url, { headers });
  }

  createPosition(position: Position) {
    const url = this.host + '/positions';
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.post<Position>(url, position, { headers });
  }

  updatePosition(position: Position) {
    const url = `${this.host}/positions/${position.id}`;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.put<Position>(url, position, { headers });
  }

  deletePosition(id: number) {
    const url = `${this.host}/positions/${id}`;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}`};
    return this.http.delete<Position>(url, { headers });
  }

}
