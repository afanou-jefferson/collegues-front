import { Component, OnInit } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: String[];
  estCache: boolean = true;
  erreurTechnique: boolean = false;
  nomIntrouvable: boolean;


  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  }

  rechercherParNom(nomSaisi: string): void {

    this.service.rechercherParNom(nomSaisi)
      .subscribe(
        listeFromRequete => { // Gestion du résultat si succès requête
          this.erreurTechnique = false;
          if (listeFromRequete.length > 0) {
            this.nomIntrouvable = false;
            this.listeMatricules = listeFromRequete;
          } else {
            this.nomIntrouvable = true;
          }
        },
        error => { this.erreurTechnique = true }, // Gestion si Erreur
        () => { } // Gestion si Signale de fin de flux
      )
    this.estCache = false;
  }

}
