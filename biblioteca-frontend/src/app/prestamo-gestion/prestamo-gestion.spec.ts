import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoGestion } from './prestamo-gestion';

describe('PrestamoGestion', () => {
  let component: PrestamoGestion;
  let fixture: ComponentFixture<PrestamoGestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestamoGestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoGestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
