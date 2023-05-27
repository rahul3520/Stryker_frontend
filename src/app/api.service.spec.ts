import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all ticket details', () => {
    const mockTicketDetails = [{ id: 1, name: 'Ticket 1' }, { id: 2, name: 'Ticket 2' }];

    service.ViewAllTicketDetails().subscribe((response: any) => {
      expect(response).toEqual(mockTicketDetails);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewAllSurgeryDetails');
    expect(req.request.method).toBe('GET');
    req.flush(mockTicketDetails);
  });

  it('should retrieve first ticket details', () => {
    const mockFirstTicketDetails = { id: 1, name: 'First Ticket' };

    service.ViewFirstTicketDetails().subscribe((response: any) => {
      expect(response).toEqual(mockFirstTicketDetails);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewFirstRowOfSurgeryDetails');
    expect(req.request.method).toBe('GET');
    req.flush(mockFirstTicketDetails);
  });

  it('should retrieve ticket details based on ticket ID', () => {
    const mockDataToSend = { ticketId: 1 };
    const mockTicketDetails = { id: 1, name: 'Ticket 1' };

    service.ViewTicketDetailsOnclickingTicketId(mockDataToSend).subscribe((response: any) => {
      expect(response).toEqual(mockTicketDetails);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewTicketDetails');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockDataToSend);
    req.flush(mockTicketDetails);
  });

  it('should show general info about the hospital', () => {
    const mockHospitalName = 'Hospital 1';
    const mockHospitalDetails = { id: 1, name: 'Hospital 1' };

    spyOn(localStorage, 'getItem').and.returnValue(mockHospitalName);

    service.ShowGeneralInfoAboutHospital().subscribe((response: any) => {
      expect(response).toEqual(mockHospitalDetails);
    });

    const req = httpMock.expectOne('http://localhost:8080/viewHospitalDetails/' + mockHospitalName);
    expect(req.request.method).toBe('GET');
    req.flush(mockHospitalDetails);
  });

  it('should retrieve all other tickets', () => {
    const mockTicketIdClicked = '1';
    const mockOtherTickets = [{ id: 2, name: 'Ticket 2' }, { id: 3, name: 'Ticket 3' }];

    spyOn(localStorage, 'getItem').and.returnValue(mockTicketIdClicked);

    service.ViewAllOtherTickets().subscribe((response: any) => {
      expect(response).toEqual(mockOtherTickets);
    });

    const req = httpMock.expectOne(`http://localhost:8080/viewOtherTickets?ticketId=${mockTicketIdClicked}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockOtherTickets);
  });

});
