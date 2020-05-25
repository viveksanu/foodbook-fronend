import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})

export class Part1Service {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/questions`);
  }

  
  update(data) {
    return this.http.post(`${baseUrl}/answers`, data);
  }

}