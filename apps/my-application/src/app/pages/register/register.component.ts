import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Router } from '@angular/router';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzButtonModule} from "ng-zorro-antd/button";

interface IRegisterForm {
  email : FormControl<string>,
  username: FormControl<string>,
  firstname: FormControl<string>,
  lastname: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.less'],
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzDividerModule,
    NzIconModule,
    NzCardModule,
    NzButtonModule
  ],
})
export class RegisterComponent {

  registerForm = new FormGroup<any>({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  submitForm(): void {
    if (this.registerForm.valid) {
      console.log('submit', this.registerForm.value);
      this.authService.signUp({username: this.registerForm.value.username , password: this.registerForm.value.password,
        firstname: this.registerForm.value.firstname, lastname: this.registerForm.value.lastname });
      this.router.navigate(['../login']);
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
