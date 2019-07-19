import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftMasterTableComponent } from './shift-master-table.component';

describe('ShiftMasterTableComponent', () => {
  let component: ShiftMasterTableComponent;
  let fixture: ComponentFixture<ShiftMasterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftMasterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftMasterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
