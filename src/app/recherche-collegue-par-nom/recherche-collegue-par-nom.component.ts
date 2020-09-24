import { Component, OnInit } from '@angular/core';
import { matricules } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: string[];

  estCache:boolean = true;
  
  constructor() {
    this.listeMatricules = matricules;
  }
    
  ngOnInit(): void {
  }

  rechercherParMatricule(): void {
    this.estCache = false;
  }

}
