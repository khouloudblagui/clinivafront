import { TestBed } from '@angular/core/testing';

import { PetientService } from './petient.service';

describe('PetientService', () => {
  let service: PetientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
