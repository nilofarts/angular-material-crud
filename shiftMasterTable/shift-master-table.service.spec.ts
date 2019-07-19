import { TestBed } from '@angular/core/testing';

import { ShiftMasterTableService } from './shift-master-table.service';

describe('ShiftMasterTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftMasterTableService = TestBed.get(ShiftMasterTableService);
    expect(service).toBeTruthy();
  });
});
