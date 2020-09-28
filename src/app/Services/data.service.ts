import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { mockCollegue } from '../mock/collegues.mock';
import { matricules } from '../mock/matricules.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private clientHttp:HttpClient) { }

  rechercherParNom(nom:string): Observable<String[]> {
      return this.clientHttp.get<String[]>(`https://my-collegues-api.herokuapp.com/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Collegue {
      return mockCollegue;
  }
  
}
