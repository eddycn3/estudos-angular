import { TestBed } from '@angular/core/testing';

import { WhiskeysService } from './whiskeys.service';

describe('WhiskeysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhiskeysService = TestBed.get(WhiskeysService);
    expect(service).toBeTruthy();
  });
});
