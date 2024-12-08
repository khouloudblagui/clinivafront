import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareplanPatientComponent } from './careplan-patient.component';

describe('CareplanPatientComponent', () => {
  let component: CareplanPatientComponent;
  let fixture: ComponentFixture<CareplanPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareplanPatientComponent]
    });
    fixture = TestBed.createComponent(CareplanPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
