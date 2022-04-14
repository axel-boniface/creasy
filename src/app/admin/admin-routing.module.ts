import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: 'admin',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AdminComponent,
  },
  {
    path: 'admin/login',
    component: SigninComponent,
  },
  {
    path: 'admin/**',
    redirectTo: 'admin',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}