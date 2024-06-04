import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleUnComponent } from './controle-un/controle-un.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/personnages', pathMatch: 'full' },
  { path: 'personnages', component: ControleUnComponent },
  { path: 'detail/:id', component: PersonnageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
