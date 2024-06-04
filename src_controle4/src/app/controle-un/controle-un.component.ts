import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from '../personnage';
import { PersonnageService } from '../personnage.service';

@Component({
  selector: 'app-controle-un',
  templateUrl: './controle-un.component.html',
  styleUrls: ['./controle-un.component.css']
})
export class ControleUnComponent implements OnInit {
  personnages$: Observable<Personnage[]>;

  constructor(private personnageService: PersonnageService) { 
    this.personnages$ = this.personnageService.getPersonnages();
  }

  ngOnInit(): void { }
}
