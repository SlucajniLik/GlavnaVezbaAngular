import { TestBed } from '@angular/core/testing';

import { Osoba2Service } from './osoba2.service';

describe('Osoba2Service', () => {
  let service: Osoba2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Osoba2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
