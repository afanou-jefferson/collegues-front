import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { mockCollegue } from '../mock/collegues.mock';
import { matricules } from '../mock/matricules.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl:String = environment.apiUrl;

  constructor(private clientHttp:HttpClient) { }

  rechercherParNom(nom:string): Observable<String[]> {
      return this.clientHttp.get<String[]>(`${this.apiUrl}?nom=${nom}`);
  }

  recupererCollegueCourant(): Collegue {
      return mockCollegue;
  }
  
}
