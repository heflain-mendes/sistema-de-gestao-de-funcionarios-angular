import { TestBed } from '@angular/core/testing';

import InterceptadorHttpService from './interceptador-http.service';

describe('InterceptadorHttpService', () => {
  let service: InterceptadorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptadorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
