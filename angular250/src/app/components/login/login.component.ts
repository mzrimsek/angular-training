import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userMessage: string;
  constructor(private service: UserService) { }

  ngOnInit() {
    if (this.service.isLoggedIn) {
      this.userMessage = `Greetings, ${this.service.getUserName()}`;
    } else {
      this.userMessage = 'You are not logged in';
    }
  }

}
