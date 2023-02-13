import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service, Site } from 'src/app/data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class SiteServiceService implements OnInit {

  constructor(private http: HttpClient){}
  
    public serviceEndPoint = "https://localhost:7045/api/Service"
    public siteEndPoint = "https://localhost:7045/api/Site"

    public siteUpdateEndPoint = "https://localhost:7045/api/Site/" 
    public serviceUpdateEndPoint = "https://localhost:7045/api/Service/" 

    public siteAddEndPoint = "https://localhost:7045/api/Site"
    public serviceAddEndPoint = "https://localhost:7045/api/Service"

    public siteRemoveEndPoint = "https://localhost:7045/api/Site/"
    public serviceRemoveEndPoint = "https://localhost:7045/api/Service/"

    getService():Observable<Service[]> {
        return this.http.get<Service[]>(this.serviceEndPoint);
    }

    getSite():Observable<Site[]> {
        return this.http.get<Site[]>(this.siteEndPoint);
    }

    updateSite(id:number, site:Site){
        return this.http.put(this.siteUpdateEndPoint+id, site);
    }

    updateService(id:number, service:Service){
      return this.http.put(this.serviceUpdateEndPoint+id, service);
  }

    addService(site: Site){
        return this.http.post<Service>(this.serviceAddEndPoint, site);
    }

    addSite(service: Service){
      return this.http.post<Site>(this.siteAddEndPoint, service);
    }

    removeSite(id:number){
        return this.http.delete(this.siteRemoveEndPoint+id);
    }

    removeService(id:number){
      return this.http.delete(this.serviceRemoveEndPoint+id);
    }

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
