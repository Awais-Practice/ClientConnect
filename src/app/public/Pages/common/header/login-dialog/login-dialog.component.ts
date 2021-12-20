import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm = new FormGroup({
    user: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}
  loginUser() {
    console.warn(this.loginForm);
  }
}
