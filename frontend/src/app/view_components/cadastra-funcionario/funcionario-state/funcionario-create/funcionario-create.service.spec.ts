import { TestBed } from '@angular/core/testing';

import { FuncionarioCreateService } from './funcionario-create.service';

describe('FuncionarioCreateService', () => {
  let service: FuncionarioCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
