import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoNuevo } from './prestamo-nuevo';

describe('PrestamoNuevo', () => {
  let component: PrestamoNuevo;
  let fixture: ComponentFixture<PrestamoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestamoNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
