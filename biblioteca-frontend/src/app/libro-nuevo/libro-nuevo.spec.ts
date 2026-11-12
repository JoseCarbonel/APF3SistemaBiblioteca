import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroNuevo } from './libro-nuevo';

describe('LibroNuevo', () => {
  let component: LibroNuevo;
  let fixture: ComponentFixture<LibroNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
