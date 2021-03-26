import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    let token = localStorage.getItem('angular-test-app-user');

    if (token) {
      return true;
    }

    return false;
  }
}
