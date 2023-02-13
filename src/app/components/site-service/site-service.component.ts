import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Service, Site } from 'src/app/data/employee.model';
import { SiteServiceService } from 'src/app/service/site-serviceService/site-service.service';

@Component({
  selector: 'app-site-service',
  templateUrl: './site-service.component.html',
  styleUrls: ['./site-service.component.css']
})
export class SiteServiceComponent implements OnInit {
  services: Service[];
  sites: Site[];
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private siteServiceService: SiteServiceService) {
    
  }
  
  // updateSite(event){
  //   console.log("mon event",event);
  //   var site = this.sites.find(x => x.id == event.key);
  //   console.log("mon produit", site)

  //   site.city = event.newData.city == undefined ? site.city : event.newData.city
  
  //   this.siteServiceService.updateSite(event.key, site).subscribe(resulat => {
  //     notify("Produit correctement modifié", "success", 500);
    
  //   });
  // }

  addSite(event){
    console.log("new product", event);
    this.siteServiceService.addSite(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  addService(event){
    console.log("new product", event);
    this.siteServiceService.addService(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  // removeEmployee(event){
  //   console.log("remove product", event);
  //   this.employeeService.removeEmployee(event.data.id).subscribe(resulat => {
  //     notify("Produit correctement supprimé", "success", 500);
  //   });
  // }

  ngOnInit(): void {
    this.siteServiceService.getService().subscribe(resultat => {
      this.services = resultat;
    });

    this.siteServiceService.getSite().subscribe(resultat => {
      this.sites = resultat;
    });
  }
}