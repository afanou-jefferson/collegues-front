import { Component, OnInit } from '@angular/core';
import { CollegueComponent } from './../../composants/collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './../../composants/recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerCollegueComponent } from './../../composants/creer-collegue/creer-collegue.component';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
