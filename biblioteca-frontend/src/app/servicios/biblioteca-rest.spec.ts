import { TestBed } from '@angular/core/testing';

import { BibliotecaRest } from './biblioteca-rest';

describe('BibliotecaRest', () => {
  let service: BibliotecaRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecaRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
