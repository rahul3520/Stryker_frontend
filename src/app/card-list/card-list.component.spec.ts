import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';

import { CardListComponent } from './card-list.component';

import { of } from 'rxjs';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let apiService: ApiService;
  let sharedService: SharedService;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CardListComponent ],
      providers: [
        { provide: ApiService, useValue: { ViewAllTicketDetails: () => of([]) } },
        { provide: SharedService, useValue: { fetchDataFromAPI: () => {} } }
      ]
    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(localStorage, 'setItem').and.stub();
    spyOn(console, 'log').and.stub();
    spyOn(router, 'navigate').and.stub();

    apiService = TestBed.inject(ApiService);
    sharedService = TestBed.inject(SharedService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch ticket details on component initialization', () => {
    const mockTicketDetails = [{ id: 1, name: 'Ticket 1' }, { id: 2, name: 'Ticket 2' }];
    spyOn(apiService, 'ViewAllTicketDetails').and.returnValue(of(mockTicketDetails));

    fixture.detectChanges();

    expect(component.tickets).toEqual(mockTicketDetails);
    // Additional expectations for the behavior resulting from fetching ticket details
  });

  it('should set ticketId in localStorage and navigate to "/orderPage"', () => {
    const ticketId = '123';

    component.GoToOrderDetailsPage(ticketId);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'ticketIdClicked',
      ticketId
    );
    expect(console.log).toHaveBeenCalledWith(ticketId);
    expect(router.navigate).toHaveBeenCalledWith(['/orderPage']);
  });

  // it('should navigate to order details page', () => {
  //   const ticketId = 1;
  //   spyOn(localStorage, 'setItem');
  //   spyOn(component.route, 'navigate');

  //   component.GoToOrderDetailsPage(ticketId);

  //   expect(localStorage.setItem).toHaveBeenCalledWith('ticketIdClicked', ticketId);
  //   expect(component.route.navigate).toHaveBeenCalledWith(['/orderPage']);
  // });



});
