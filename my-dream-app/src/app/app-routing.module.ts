import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule,Routes} from '@angular/router';


import {UsersComponent} from './users/users.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: UsersComponent }

  ]
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }