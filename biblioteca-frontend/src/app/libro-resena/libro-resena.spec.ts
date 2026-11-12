import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroResena } from './libro-resena';

describe('LibroResena', () => {
  let component: LibroResena;
  let fixture: ComponentFixture<LibroResena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroResena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroResena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
