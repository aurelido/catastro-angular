import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService.TsService } from './auth-guard-service.ts.service';

describe('AuthGuardService.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService.TsService]
    });
  });

  it('should be created', inject([AuthGuardService.TsService], (service: AuthGuardService.TsService) => {
    expect(service).toBeTruthy();
  }));
});
