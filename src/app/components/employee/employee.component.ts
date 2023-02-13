import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Employee, Service, Site} from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

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
  
  updateEmployee(event){
    console.log("mon event",event);
    var employee = this.employees.find(x => x.id == event.key);
    console.log("mon produit", employee)
  
    employee.firstname = event.newData.firstname == undefined ? employee.firstname : event.newData.firstname
    employee.lastname = event.newData.lastname == undefined ? employee.lastname : event.newData.lastname
    employee.cellphone = event.newData.cellphone == undefined ? employee.cellphone : event.newData.cellphone
    employee.phone = event.newData.phone == undefined ? employee.phone : event.newData.phone
    employee.email = event.newData.email == undefined ? employee.email : event.newData.email

    employee.siteId = event.newData.sideId == undefined ? employee.siteId : event.newData.siteId
    employee.serviceId = event.newData.serviceId == undefined ? employee.serviceId : event.newData.serviceId
  
    this.employeeService.updateEmployee(event.key, employee).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);
    
    });
  }

  addEmployee(event){
    console.log("new product", event);
    this.employeeService.addEmployee(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeEmployee(event){
    console.log("remove product", event);
    this.employeeService.removeEmployee(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
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



