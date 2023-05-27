import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SharedService]
    });
    service = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data from the API and emit it through apiData$', (done: DoneFn) => {
    const mockResponse = { data: 'Mock data' };

    service.apiData$.subscribe((response: any) => {
      expect(response).toEqual(mockResponse);
      done();
    });

    service.fetchDataFromAPI();

    const req = httpMock.expectOne('http://localhost:8080/viewAllSurgeryDetails');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  
});
