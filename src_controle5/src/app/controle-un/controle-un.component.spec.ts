import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleUnComponent } from './controle-un.component';

describe('ControleUnComponent', () => {
  let component: ControleUnComponent;
  let fixture: ComponentFixture<ControleUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleUnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControleUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
