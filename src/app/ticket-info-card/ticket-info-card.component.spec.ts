import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInfoCardComponent } from './ticket-info-card.component';

describe('TicketInfoCardComponent', () => {
  let component: TicketInfoCardComponent;
  let fixture: ComponentFixture<TicketInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
