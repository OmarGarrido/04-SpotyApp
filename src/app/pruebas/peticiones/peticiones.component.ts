import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styles: [
  ]
})

export class PeticionesComponent implements OnInit {

paises:any[] =[]

  constructor(private _http:HttpClient) {
    this._http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((paises:any)=>{
      this.paises=paises;
      console.log(paises)
    });

   }

  ngOnInit(): void {
  }

}
