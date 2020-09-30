import { environment } from './../../environments/environment';
import { Collegue } from './../models/Collegue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// tap (avant s'appelait do)
// peek en Stream Java


interface CollegueBack {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }

  selectionnerMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<CollegueBack>(`${environment.apiUrl}/collegues/${matricule}`)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email, // transforme le collegue(Json) recu en objet Collegue JS geré par notre code
          new Date(colBack.dateDeNaissance), colBack.photoUrl)),
        tap(collegue => this.subCollegueSelectionne.next(collegue))// Permet de publier le collegue trouvé, il donne accès à la donnée sans modifier le flux
        //Tap == Do dans les anciennes version de RX
      );
  }
}
