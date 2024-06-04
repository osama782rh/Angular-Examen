import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageDetailComponent } from './personnage-detail.component';

describe('PersonnageDetailComponent', () => {
  let component: PersonnageDetailComponent;
  let fixture: ComponentFixture<PersonnageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnageDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
