import { Component, OnInit } from '@angular/core';
import { Employee, Service, Site } from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/service/employeeService/employee.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  employees: Employee[]=[]
  services: Service[];
  sites: Site[];
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(resultat => {
      this.employees = resultat;
     })

    this.employeeService.getService().subscribe(resultat => {
      this.services = resultat;
    });

    this.employeeService.getSite().subscribe(resultat => {
      this.sites = resultat;
    });
  }
}
