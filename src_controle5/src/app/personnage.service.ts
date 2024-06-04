import { Injectable } from '@angular/core';
import { Personnage } from './personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private personnages: Personnage[] = [
    { id: 1, name: 'Ulysse', type: 'gentil' },
    { id: 2, name: 'Cyrano', type: 'gentil' },
    { id: 3, name: 'Milady', type: 'méchant' }
  ];

  getPersonnages(): Personnage[] {
    return this.personnages;
  }

  getPersonnage(id: number): Personnage | undefined {
    return this.personnages.find(p => p.id === id);
  }
}
