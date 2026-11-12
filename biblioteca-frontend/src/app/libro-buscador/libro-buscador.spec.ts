import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroBuscador } from './libro-buscador';

describe('LibroBuscador', () => {
  let component: LibroBuscador;
  let fixture: ComponentFixture<LibroBuscador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroBuscador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroBuscador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
