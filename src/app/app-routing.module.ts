import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {
    path:'',
    component:ConnexionComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
