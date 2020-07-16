import { TestBed } from '@angular/core/testing';

import { BettingtipService } from './bettingtip.service';

describe('BettingtipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BettingtipService = TestBed.get(BettingtipService);
    expect(service).toBeTruthy();
  });
});
