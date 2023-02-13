import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employeeService/employee.service';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { SiteService } from './service/siteService/site.service';
import { FormsModule } from '@angular/forms';
import { VisitorComponent } from './components/visitor/visitor.component';
import { SiteServiceComponent } from './components/site-service/site-service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    ConnexionComponent,
    VisitorComponent,
    SiteServiceComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [EmployeeService, SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
