import { Route } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./service/auth-guard/auth.guard";
import {SignUpComponent} from "./pages/signUp/signUp.component";
import {LoginComponent} from "./pages/login/login.component";
import {TestComponent} from "./pages/test/test.component";

export const appRoutes: Route[] = [{
  path: 'login',
  component: LoginComponent
},
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],

    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    // pathMatch: 'full'
  }
];

