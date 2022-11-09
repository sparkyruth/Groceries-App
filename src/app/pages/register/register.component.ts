import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  successMessage: String = '';
  constructor(
    private userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cnfpass: new FormControl('', this.passValidator),
    });

    this.myForm.controls['password'].valueChanges.subscribe((x) =>
      this.myForm.controls['cnfpass'].updateValueAndValidity()
    );
  }

  ngOnInit() {}

  isValid(controlName: string, errorName: string) {
    return this.myForm.controls[controlName]?.hasError(errorName);
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true,
          };
        }
      }
    }

    return null;
  }

  register() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      this.userService
        .submitRegister(this.myForm.value)
        .subscribe(
          (data: any) => (this.successMessage = 'Registration Success')
        ),
        (error: any) => (this.successMessage = 'SOme error');
    }
  }

  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
