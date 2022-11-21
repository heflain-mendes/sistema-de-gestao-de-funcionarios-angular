import { TestBed } from '@angular/core/testing';

import { ShowMensageService } from './show-mensage.service';

describe('ShowMensageService', () => {
  let service: ShowMensageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowMensageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
