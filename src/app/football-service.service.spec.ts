import { TestBed, inject } from '@angular/core/testing';

import { FootballServiceService } from './football-service.service';

describe('FootballServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballServiceService]
    });
  });

  it('should be created', inject([FootballServiceService], (service: FootballServiceService) => {
    expect(service).toBeTruthy();
  }));
});
