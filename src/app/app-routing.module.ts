import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SiteServiceComponent } from './components/site-service/site-service.component';
import { VisitorComponent } from './components/visitor/visitor.component';

const routes: Routes = [
  {path:'',component:VisitorComponent},
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'visitor',
    component:VisitorComponent
  },
  {
    path:'siteService',
    component:SiteServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
