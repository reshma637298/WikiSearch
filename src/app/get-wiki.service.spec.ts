import { TestBed } from '@angular/core/testing';

import { GetWikiService } from './get-wiki.service';

describe('GetWikiService', () => {
  let service: GetWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
