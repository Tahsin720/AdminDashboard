import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl = 'https://localhost:7023/api/';
  constructor(private http: HttpClient) { }
}
