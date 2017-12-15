import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-stuff-templated-example-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = 'Mike';
  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

}
