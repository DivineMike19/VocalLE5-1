import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn: boolean = false;
  public redirectUrl: string = '';

  constructor(private http: HttpClient) {}

  // Updated: Use all parameters for registration
  register(username: string, password: string, firstName: string, lastName: string) {
    return this.http.post('https://localhost:7152/api/login/register', {
      username,
      password,
      firstName,
      lastName
    });
  }

login(username: string, password: string) {
  return this.http.post('https://localhost:7152/api/login/login', { username, password });
}

}
