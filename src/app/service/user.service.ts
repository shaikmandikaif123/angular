import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'assets/users.json'; // Path to your users JSON file

  constructor(private http: HttpClient) {}

  /**
   * Fetches all users from the JSON file.
   * @returns An Observable emitting an array of User objects.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
   
     return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  
}
