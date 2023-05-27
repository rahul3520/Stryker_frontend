import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service'; 
import { TicketInfoCardComponent } from './ticket-info-card.component';

describe('TicketInfoCardComponent', () => {
  let component: TicketInfoCardComponent;
  let fixture: ComponentFixture<TicketInfoCardComponent>;
  let apiService: ApiService;
  let apiServiceMock: jasmine.SpyObj<ApiService>;


  beforeEach(async () => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['ViewFirstTicketDetails']);

    await TestBed.configureTestingModule({
      declarations: [ TicketInfoCardComponent ],
      providers: [{ provide: ApiService, useValue: apiSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(TicketInfoCardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set firstTicket with the response from ViewFirstTicketDetails', () => {
    const responseMock = { id: 1, name: 'Ticket 1' };
    spyOn(apiService, 'ViewFirstTicketDetails').and.returnValue(of(responseMock));

    fixture.detectChanges(); // Trigger change detection to initialize the subscription

    expect(component.firstTicket).toEqual(responseMock);
  });

  it('should retrieve first ticket details', () => {
    const firstTicketResponse = {ticketId:'314' };

    apiServiceMock.ViewFirstTicketDetails.and.returnValue(of(firstTicketResponse));

    expect(apiServiceMock.ViewFirstTicketDetails).toHaveBeenCalled();

    expect(component.firstTicket).toEqual(firstTicketResponse);
  });

});
