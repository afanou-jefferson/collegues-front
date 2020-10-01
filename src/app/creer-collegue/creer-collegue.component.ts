import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IFormCreerCollegue } from './i-form-creer-collegue'



@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  interfaceCollegue:IFormCreerCollegue = {};

  erreurTechnique = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  clickCreerCollegue():void {
    this.service.creerCollegue(this.interfaceCollegue).subscribe(
      collegue => { this.interfaceCollegue = {} },//On vide le formulaire si succès de création de collègue
      error => { this.erreurTechnique = true}
    )
  }

}
