import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodotaskService {

  private baseUrl = 'http://localhost:8080/api/v1/todos';

  constructor(private http: HttpClient) { }

  getTodotask(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTodotask(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateTodotask(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTodotask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTodotasksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
