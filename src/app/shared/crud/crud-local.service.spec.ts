import { TestBed } from '@angular/core/testing';

import { CrudLocalService } from './crud-local.service';

describe('CrudLocalService', () => {
  let service: CrudLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
