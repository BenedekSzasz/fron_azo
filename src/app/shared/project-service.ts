// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Project } from '../interfaces/project';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProjectService {
//   http = inject(HttpClient);
//   host = 'http://localhost:8000/api';

//   getProjects() {
//     const url = `${this.host}/projects`;
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}`};
//     return this.http.get<Project[]>(url, { headers });
//   }

//   createProject(project: Project) {
//     const url = this.host + '/projects';
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}`};
//     return this.http.post<Project>(url, project, { headers });
//   }

//   updatePosition(position: Position) {
//     const url = `${this.host}/positions/${position.id}`;
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}`};
//     return this.http.put<Position>(url, position, { headers });
//   }

//   deletePosition(id: number) {
//     const url = `${this.host}/positions/${id}`;
//     const token = localStorage.getItem('token');
//     const headers = { Authorization: `Bearer ${token}`};
//     return this.http.delete<Position>(url, { headers });
//   }

// }
