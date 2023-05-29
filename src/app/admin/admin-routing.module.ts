import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home', redirectTo:''},
   { path: '', component: HomeComponent,

    children: [
      { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
