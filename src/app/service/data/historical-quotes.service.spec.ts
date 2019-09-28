import { TestBed } from '@angular/core/testing';

import { HistoricalQuotesService } from './historical-quotes.service';

describe('HistoricalQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoricalQuotesService = TestBed.get(HistoricalQuotesService);
    expect(service).toBeTruthy();
  });
});
