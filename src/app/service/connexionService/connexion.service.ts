import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  url = "https://localhost:7045/api/User"
  constructor(private http: HttpClient) { }

  login(credentials: any): any{
    return this.http.post(this.url, credentials)
  }
}
