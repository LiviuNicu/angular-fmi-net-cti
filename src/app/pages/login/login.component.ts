import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  public text: string = '';
  public isDisabled: boolean = false;
  public user: any = {
    email: '',
    password: '',
  };
  public error: boolean | string = false;
  constructor() {}

  ngOnInit(): void {
    this.text = 'TEST';
  }

  doLogin(): void {
    this.error = false;
    console.log('LOGIN CLICKED', this.user);
    if (this.validateEmail(this.user.email)) {
      // O SA APELAM SERVICIUL DE LOGIN
    } else {
      this.error = 'Email is not valid';
    }
  }

  validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  ngOnChanges() {}
  ngOnDestroy() {}
}
