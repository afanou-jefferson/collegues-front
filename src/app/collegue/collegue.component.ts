import { Component, OnInit, Input } from '@angular/core';
import { mockCollegue } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegueParam: Collegue;

  estCache: boolean = false;

  stringMockCollegue = mockCollegue.toString();

  constructor() { }

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
