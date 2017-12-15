import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-forms-stuff-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {

  userName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    cantEndWith('!')
  ]);
  password = new FormControl('', [
    Validators.required,
    cantEndWith('%')
  ]);

  loginForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      userName: this.userName,
      password: this.password,
    });

    // this.userName.valueChanges
    //   .debounceTime(300)
    //   .subscribe(x => console.log(x));
  }

  login() {
    console.log(this.loginForm.value);
  }

}

function cantEndWith(char: string) {
  return function notCheerful(input: FormControl) {
    const val: string = input.value;
    const result = val.substr(val.length - 1, 1) === char ? { ending: true } : null;
    return result;
  };
}

