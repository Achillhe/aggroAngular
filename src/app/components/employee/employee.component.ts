import { Component, OnInit } from '@angular/core';
import { Employee} from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees: Employee[]=[]
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
    var employee = this.employees.find(x => x.Id == event.key);
    console.log("mon produit", employee)
  
    employee.Firstname = event.newData.Firstname == undefined ? employee.Firstname : event.newData.Firstname
    employee.Lastname = event.newData.Lastname == undefined ? employee.Lastname : event.newData.Lastname
    employee.Cellphone = event.newData.Cellphone == undefined ? employee.Cellphone : event.newData.Cellphone
    employee.Phone = event.newData.Phone == undefined ? employee.Phone : event.newData.Phone
    employee.Email = event.newData.Email == undefined ? employee.Email : event.newData.aEmail
    
  
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
  }
}

function notify(arg0: string, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}

