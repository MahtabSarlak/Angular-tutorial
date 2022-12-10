import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../service/auth-service/auth.service';
import {Router, RouterLink} from '@angular/router';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './signUp.component.html',
  styleUrls: ['../../app.component.less'],
    imports: [
        NzFormModule,
        NzInputModule,
        NzDividerModule,
        NzIconModule,
        NzCardModule,
        NzButtonModule,
        FormsModule, ReactiveFormsModule, RouterLink
    ]
})
export class SignUpComponent{
  registerForm = new FormGroup<any>({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

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
