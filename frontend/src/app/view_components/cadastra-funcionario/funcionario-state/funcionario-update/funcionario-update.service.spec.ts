import { TestBed } from '@angular/core/testing';

import { FuncionarioUpdateService } from './funcionario-update.service';

describe('FuncionarioUpdateService', () => {
  let service: FuncionarioUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
