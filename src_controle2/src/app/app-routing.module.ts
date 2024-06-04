import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races/races.component';
import { SingleraceComponent } from './singlerace/singlerace.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/auth/auth.gard';
import { CreateVilleComponent } from './create-ville/create-ville.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: RacesComponent, canActivate: [AuthGuard] },
  { path: 'singlerace/:index', component: SingleraceComponent, canActivate: [AuthGuard] },
  { path: 'create-ville', component: CreateVilleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
