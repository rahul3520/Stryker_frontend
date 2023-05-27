import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ViewAllTicketsComponent } from './view-all-tickets.component';

import { ApiService } from 'src/app/api.service'; // Import the ApiService
import { SharedService } from 'src/app/shared.service'; // Import the SharedService


describe('ViewAllTicketsComponent', () => {
  let component: ViewAllTicketsComponent;
  let fixture: ComponentFixture<ViewAllTicketsComponent>;
  let apiService: ApiService;
  let sharedService: SharedService;


  beforeEach(async () => {
    
    await TestBed.configureTestingModule({

      imports:[RouterTestingModule],
      declarations: [ ViewAllTicketsComponent ],
      providers: [ApiService,SharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(ViewAllTicketsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    sharedService=TestBed.inject(SharedService)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all ticket details on initialization', () => {
    const tickets = [{ id: 1 }, { id: 2 }];
    spyOn(apiService, 'ViewAllTicketDetails').and.returnValue(of(tickets));

    fixture.detectChanges();

    expect(apiService.ViewAllTicketDetails).toHaveBeenCalled();
    expect(component.tickets).toEqual(tickets);
  });

  it('should fetch data from API in ngOnInit', () => {
    const fetchDataSpy = spyOn(sharedService, 'fetchDataFromAPI');

    component.ngOnInit();

    expect(fetchDataSpy).toHaveBeenCalled();
  });

});
