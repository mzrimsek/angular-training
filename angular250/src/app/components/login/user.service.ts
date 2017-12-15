import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLoggedIn = true;

  getUserName() {
    return 'Boba Fett';
  }
}
