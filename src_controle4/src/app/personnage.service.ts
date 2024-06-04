import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personnage } from './personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private personnagesSubject: BehaviorSubject<Personnage[]> = new BehaviorSubject<Personnage[]>([
    { id: 1, name: 'Ulysse', type: 'gentil' },
    { id: 2, name: 'Cyrano', type: 'gentil' },
    { id: 3, name: 'Milady', type: 'méchant' }
  ]);

  getPersonnages(): Observable<Personnage[]> {
    return this.personnagesSubject.asObservable();
  }

  toggleType(personnage: Personnage): void {
    const personnages = this.personnagesSubject.getValue();
    const index = personnages.findIndex(p => p.id === personnage.id);
    if (index !== -1) {
      personnages[index].type = personnages[index].type === 'gentil' ? 'méchant' : 'gentil';
      this.personnagesSubject.next(personnages);
    }
  }
}
