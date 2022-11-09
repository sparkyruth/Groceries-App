import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  isValid(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName]?.hasError(errorName);
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe(
          (data:any) => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dash']);
          },
          (error:any) => { }
        );
    }
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}
