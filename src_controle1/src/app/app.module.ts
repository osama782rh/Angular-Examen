import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ControleUnComponent } from './controle-un/controle-un.component';
import { PersonnageComponent } from './personnage/personnage.component';

@NgModule({
  declarations: [
    AppComponent,
    ControleUnComponent,
    PersonnageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
