import { Component, Input } from '@angular/core';
import { Personnage } from '../personnage';
import { PersonnageService } from '../personnage.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {
  @Input() personnage!: Personnage;

  constructor(private personnageService: PersonnageService) { }

  toggleType(): void {
    this.personnageService.toggleType(this.personnage);
  }
}
