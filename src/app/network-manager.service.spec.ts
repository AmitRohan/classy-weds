import { TestBed } from '@angular/core/testing';

import { NetworkManagerService } from './network-manager.service';

describe('NetworkManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkManagerService = TestBed.get(NetworkManagerService);
    expect(service).toBeTruthy();
  });
});
