import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import { PersonnageService } from '../personnage.service';

@Component({
  selector: 'app-controle-un',
  templateUrl: './controle-un.component.html',
  styleUrls: ['./controle-un.component.css']
})
export class ControleUnComponent implements OnInit {
  personnages: Personnage[] = [];

  constructor(private personnageService: PersonnageService) { }

  ngOnInit(): void {
    this.personnages = this.personnageService.getPersonnages();
  }
}
