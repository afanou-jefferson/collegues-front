import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageGalerieComponent } from './pages/page-galerie/page-galerie.component';
import { PageAProposComponent } from './pages/page-apropos/page-apropos.component';


export const ROUTES: Routes = [
  { path: '' , component: PageAcceuilComponent },  
  { path: 'acceuil' , component: PageAcceuilComponent },
  { path: 'galerie', component: PageGalerieComponent },
  { path: 'apropos', component: PageAProposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
