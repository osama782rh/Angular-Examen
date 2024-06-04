import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControleUnComponent } from './controle-un/controle-un.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';
import { PersonnageService } from './personnage.service';

@NgModule({
  declarations: [
    AppComponent,
    ControleUnComponent,
    PersonnageComponent,
    PersonnageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PersonnageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
