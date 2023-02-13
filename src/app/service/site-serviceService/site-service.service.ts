import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, Site } from 'src/app/data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class SiteServiceService implements OnInit {

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    public serviceEndPoint = "https://localhost:7045/api/Service"
    public siteEndPoint = "https://localhost:7045/api/Site"

    public siteUpdateEndPoint = "https://localhost:7045/api/Site/" 
    public serviceUpdateEndPoint = "https://localhost:7045/api/Service/" 

    public siteAddEndPoint = "https://localhost:7045/api/Site"
    public serviceAddEndPoint = "https://localhost:7045/api/Service"

    getService():Observable<Service[]> {
        return this.http.get<Service[]>(this.serviceEndPoint);
    }

    getSite():Observable<Site[]> {
        return this.http.get<Site[]>(this.siteEndPoint);
    }

    // updateEmployee(id:number, employee:Employee){
    //     return this.http.put(this.employeeUpdateEndPoint+id, employee);
    // }

    addService(site: Site){
        return this.http.post<Service>(this.serviceAddEndPoint, site);
    }

    addSite(service: Service){
      return this.http.post<Site>(this.siteAddEndPoint, service);
    }

    // removeEmployee(id:number){
    //     return this.http.delete(this.employeeUpdateEndPoint+id);
    // }
}
