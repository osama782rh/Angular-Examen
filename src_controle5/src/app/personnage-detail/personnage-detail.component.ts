import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonnageService } from '../personnage.service';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.css']
})
export class PersonnageDetailComponent implements OnInit {
  personnage: Personnage | undefined;

  constructor(
    private route: ActivatedRoute,
    private personnageService: PersonnageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPersonnage();
  }

  getPersonnage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personnage = this.personnageService.getPersonnage(id);
  }

  goBack(): void {
    this.location.back();
  }
}
