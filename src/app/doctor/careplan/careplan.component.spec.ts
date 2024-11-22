import { ComponentFixture, TestBed } from '@angular/core/testing';

import { careplanComponent } from './careplan.component';

describe('CareplanComponent', () => {
  let component: careplanComponent;
  let fixture: ComponentFixture<careplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [careplanComponent]
    });
    fixture = TestBed.createComponent(careplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
