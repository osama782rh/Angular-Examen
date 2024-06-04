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

  addPersonnage(personnage: Personnage): void {
    this.personnages.push(personnage);
  }

  updatePersonnage(updatedPersonnage: Personnage): void {
    const index = this.personnages.findIndex(p => p.id === updatedPersonnage.id);
    if (index !== -1) {
      this.personnages[index] = updatedPersonnage;
    }
  }

  deletePersonnage(id: number): void {
    this.personnages = this.personnages.filter(p => p.id !== id);
  }
}
