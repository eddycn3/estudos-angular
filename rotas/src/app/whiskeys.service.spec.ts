import { TestBed } from '@angular/core/testing';

import { WhiskeysService } from './whiskeys.service';

describe('WhiskeysService', () => {
  let service: WhiskeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiskeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
