import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetailsCardComponent } from './hospital-details-card.component';

describe('HospitalDetailsCardComponent', () => {
  let component: HospitalDetailsCardComponent;
  let fixture: ComponentFixture<HospitalDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
