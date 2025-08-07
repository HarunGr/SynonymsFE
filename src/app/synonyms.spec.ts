import { TestBed } from '@angular/core/testing';

import { Synonyms } from './synonyms';

describe('Synonyms', () => {
  let service: Synonyms;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Synonyms);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
