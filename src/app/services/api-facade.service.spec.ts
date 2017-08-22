import { TestBed, inject } from '@angular/core/testing';

import { ApiFacadeService } from './api-facade.service';

describe('ApiFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFacadeService]
    });
  });

  it('should be created', inject([ApiFacadeService], (service: ApiFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
