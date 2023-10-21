import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultComponent,

    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(opt => opt.HomeModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(opt => opt.DashboardModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./views/role/role.module').then(opt => opt.RoleModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
