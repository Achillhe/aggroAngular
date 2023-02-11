import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connect(){
    this.router.navigate(['/employee'],{replaceUrl:true})
  }

  constructor(private router:Router){

  }
}