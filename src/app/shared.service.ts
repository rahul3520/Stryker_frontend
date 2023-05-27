import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiDataSubject = new Subject<any>();
  public apiData$ = this.apiDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchDataFromAPI() {
    this.http.get("http://localhost:8080/viewAllSurgeryDetails").subscribe((response) => {
      this.apiDataSubject.next(response);
    });
  }
}
