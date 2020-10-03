import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './composants/recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerCollegueComponent } from './composants/creer-collegue/creer-collegue.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './composants/menu/menu.component';
import { ROUTES } from './app-routing.module'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageGalerieComponent } from './pages/page-galerie/page-galerie.component';
import { PageAProposComponent } from './pages/page-apropos/page-apropos.component';



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent, 
    MenuComponent,
    PageAcceuilComponent,
    PageGalerieComponent,
    PageAProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
