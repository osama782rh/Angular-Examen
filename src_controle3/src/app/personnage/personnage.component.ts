import { Component, Input } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {
  @Input() personnage!: Personnage;

  toggleType(): void {
    this.personnage.type = this.personnage.type === 'gentil' ? 'méchant' : 'gentil';
  }
}
