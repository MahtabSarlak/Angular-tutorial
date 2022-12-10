import { Component, OnInit } from '@angular/core';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.less'],
  standalone: true,
  imports: [
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
