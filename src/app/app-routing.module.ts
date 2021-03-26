import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component'
import { LoginPageComponent } from './components/pages/login-page/login-page.component'
import { AuthGuardService } from './services/auth-guard.service'
import { AuthGuardLoggedService } from './services/auth-guard-logged.service';

const routes: Routes = [
  { 
    path: '',
    canActivate: [AuthGuardService],
    component: HomePageComponent,
  },
  { 
    path: 'login',
    canActivate: [AuthGuardLoggedService],
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
