import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from 'src/app/models/Collegue';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-fiche-collegue',
  templateUrl: './page-fiche-collegue.component.html',
  styleUrls: ['./page-fiche-collegue.component.css']
})
export class PageFicheCollegueComponent implements OnInit {

  matriculeURL: string;
  collegue: Collegue;

  constructor(private activatedRoute: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.matriculeURL = params.get('mat')
    });

    this.service.selectionnerMatricule(this.matriculeURL).subscribe(() => { });
    this.service.recupererCollegueCourant().subscribe(colSelect => this.collegue = colSelect);
  }
}


