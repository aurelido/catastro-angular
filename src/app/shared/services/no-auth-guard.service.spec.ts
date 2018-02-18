import { TestBed, inject } from '@angular/core/testing';

import { NoAuthGuardService.TsService } from './no-auth-guard-service.ts.service';

describe('NoAuthGuardService.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuardService.TsService]
    });
  });

  it('should be created', inject([NoAuthGuardService.TsService], (service: NoAuthGuardService.TsService) => {
    expect(service).toBeTruthy();
  }));
});
