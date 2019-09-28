import { TestBed } from '@angular/core/testing';

import { HistoricalFullQuotesService } from './historical-full-quotes.service';

describe('HistoricalFullQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoricalFullQuotesService = TestBed.get(HistoricalFullQuotesService);
    expect(service).toBeTruthy();
  });
});
