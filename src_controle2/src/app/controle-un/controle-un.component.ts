import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-controle-un',
  templateUrl: './controle-un.component.html',
  styleUrls: ['./controle-un.component.css']
})
export class ControleUnComponent implements OnInit {
  personnages: Personnage[] = [
    { id: 1, name: 'Ulysse', type: 'gentil' },
    { id: 2, name: 'Cyrano', type: 'gentil' },
    { id: 3, name: 'Milady', type: 'méchant' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
