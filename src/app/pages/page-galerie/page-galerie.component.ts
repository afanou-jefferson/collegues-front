import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICollegueGalerie } from './icollegue-galerie';


@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})
export class PageGalerieComponent implements OnInit {

  service:DataService;
  listeCollegues : ICollegueGalerie[];
  erreurTechnique: boolean;
  aucunCollegueTrouve:boolean;

  constructor(service:DataService) { 
    this.service = service;
  }
    
  ngOnInit(): void {
    this.afficherPhotosCollegues();
  }

  afficherPhotosCollegues(){
    this.service.getPhotosCollegues()
      .subscribe(colleguesFromBack => {
          this.erreurTechnique = false;
          if ( colleguesFromBack.length > 0){
            this.aucunCollegueTrouve = false;
            this.listeCollegues = colleguesFromBack;
          } else {
            this.aucunCollegueTrouve = true;
          }
        }, error => this.erreurTechnique = true
      );
  }

}
