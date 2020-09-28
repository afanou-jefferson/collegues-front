import { Component, OnInit, Input } from '@angular/core';
import { mockCollegue } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { DataService } from '../Services/data.service';

// Config Component
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})


//Variables JS à mettre à disposition dans la partie HTML du component
export class CollegueComponent implements OnInit {

//Variables appelées par Interpolation
  //@Input() collegueParam: Collegue;
  estCache: boolean = false;
  stringMockCollegue:string = mockCollegue.toString();
  collegueFromService:Collegue;


//Constrcuteur
  constructor(private service: DataService) {

    this.collegueFromService = this.service.recupererCollegueCourant();
  }


//Fonctions du components
  modifierCollegue() {
    console.log('Modification du collègue');
    this.estCache = true;
  }

  creationCollegue(){
    console.log("Création d'un nouveau collègue");
  }

  ngOnInit(): void {
  }

}
