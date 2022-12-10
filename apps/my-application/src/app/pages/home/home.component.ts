import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import { IconDefinition } from '@ant-design/icons-angular';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {HeaderComponent} from "../../components/header/header.component";
import {
  PieChartOutline,
  DesktopOutline,
} from '@ant-design/icons-angular/icons';
import {RouterLink} from "@angular/router";

// const icons: IconDefinition[] = [
//   PieChartOutline,
//   DesktopOutline,
// ];
// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    SidebarComponent,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzDividerModule,
    NzIconModule,
    NzCardModule,
    NzLayoutModule,
    HeaderComponent,
    RouterLink,

  ],
  styleUrls: ['../../app.component.less']
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;

  submitForm(): void {
    if (this.homeForm.valid) {
      console.log('submit', this.homeForm.value);
    } else {
      Object.values(this.homeForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      ticketType: [null, [Validators.required]],
      ticketID: [null, [Validators.required]],
      ticketName: [true]
    });
  }
}
