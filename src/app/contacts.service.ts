import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }

  getCurrentUser(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
