import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MemoCreateComponent } from './memo/create/create.component';
import { MemoViewComponent } from './memo/view/view.component';


const routes: Routes = [
  {path:'',redirectTo:'/memo',pathMatch:'full'},
  {
    path: 'memo', children: [
      {
        path: 'create', component: MemoCreateComponent
      },
      {
        path: '', component: MemoViewComponent,
      }
    ]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
