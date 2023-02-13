import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/service/connexionService/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  }

  constructor(private connexionService: ConnexionService, private router:Router){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void{
    console.log(this.form)
    this.connexionService.login(this.form).subscribe(
      (data: any) => console.log(data),
      (err: any) => console.log(err)
    )
  }
  connect(){
    this.router.navigate(['/employee'],{replaceUrl:true})
  }

}
