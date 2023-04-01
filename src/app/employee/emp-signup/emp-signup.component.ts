import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css'],
})
export class EmpSignupComponent {

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }


}
