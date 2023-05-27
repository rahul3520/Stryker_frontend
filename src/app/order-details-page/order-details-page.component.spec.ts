import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';

import { OrderDetailsPageComponent } from './order-details-page.component';

describe('OrderDetailsPageComponent', () => {
  let component: OrderDetailsPageComponent;
  let fixture: ComponentFixture<OrderDetailsPageComponent>;
  let apiService: ApiService;
  let sharedService: SharedService;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsPageComponent ],
      imports: [RouterTestingModule],
      providers: [ApiService,SharedService]
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(OrderDetailsPageComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    sharedService = TestBed.inject(SharedService);
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all ticket details and view ticket details on initialization', () => {
    const tickets = [{ id: 1 }, { id: 2 }];
    const ticketDetails = [{ hospitalName: 'Hospital A' }];

    spyOn(apiService, 'ViewAllTicketDetails').and.returnValue(of(tickets));
    spyOn(localStorage, 'getItem').and.returnValue('123');
    spyOn(apiService, 'ViewTicketDetailsOnclickingTicketId').and.returnValue(
      of(ticketDetails)
    );
    spyOn(localStorage, 'setItem').and.stub();
    spyOn(console, 'log').and.stub();

    fixture.detectChanges();

    expect(apiService.ViewAllTicketDetails).toHaveBeenCalled();
    expect(component.tickets).toEqual(tickets);
    expect(apiService.ViewTicketDetailsOnclickingTicketId).toHaveBeenCalledWith(
      { ticketId: '123' }
    );
    expect(component.ticketClicked).toEqual(ticketDetails);
    expect(component.nameOfHospital).toEqual('Hospital A');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'hospitalName',
      'Hospital A'
    );
    expect(console.log).toHaveBeenCalledWith('Hospital A');
  });

  it('should fetch hospital details and other tickets when viewing hospital details', () => {
    const hospitalDetails = { name: 'Hospital A' };
    const otherTickets = [{ id: 1 }, { id: 2 }];

    spyOn(apiService, 'ShowGeneralInfoAboutHospital').and.returnValue(
      of(hospitalDetails)
    );
    spyOn(apiService, 'ViewAllOtherTickets').and.returnValue(
      of(otherTickets)
    );

    component.ViewHospitalDetails();

    expect(apiService.ShowGeneralInfoAboutHospital).toHaveBeenCalled();
    expect(apiService.ViewAllOtherTickets).toHaveBeenCalled();
    expect(component.customer).toEqual(hospitalDetails);
    expect(component.showHospitalInfo).toBeTrue();
    expect(component.otherTickets).toEqual(otherTickets);
  });
  

  it('should fetch ticket details on initialization', () => {
    const ticketIdClicked = '123';
    const ticketDetails = { hospitalName: 'Hospital A' };
    spyOn(apiService, 'ViewTicketDetailsOnclickingTicketId').and.returnValue(
      of([ticketDetails])
    );

    localStorage.setItem('ticketIdClicked', ticketIdClicked);

    fixture.detectChanges();

    expect(apiService.ViewTicketDetailsOnclickingTicketId).toHaveBeenCalledWith(
      { ticketId: ticketIdClicked }
    );
    expect(component.ticketClicked).toEqual([ticketDetails]);
    expect(component.nameOfHospital).toEqual('Hospital A');
    expect(localStorage.getItem('hospitalName')).toEqual('Hospital A');
  });

  it('should fetch hospital details and other tickets when viewing hospital details', () => {
    const hospitalDetails = { name: 'Hospital A' };
    const otherTickets = [{ id: 1 }, { id: 2 }];
    spyOn(apiService, 'ShowGeneralInfoAboutHospital').and.returnValue(
      of(hospitalDetails)
    );
    spyOn(apiService, 'ViewAllOtherTickets').and.returnValue(
      of(otherTickets)
    );

    component.ViewHospitalDetails();

    expect(apiService.ShowGeneralInfoAboutHospital).toHaveBeenCalled();
    expect(apiService.ViewAllOtherTickets).toHaveBeenCalled();
    expect(component.customer).toEqual(hospitalDetails);
    expect(component.showHospitalInfo).toBeTrue();
    expect(component.otherTickets).toEqual(otherTickets);
  });


});
