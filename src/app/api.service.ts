import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  nameOfHospital:any=""
  ticketClicked:any=""

  constructor(private http:HttpClient) { }

  ViewAllTicketDetails=()=>
  {
    return this.http.get("http://localhost:8080/viewAllSurgeryDetails")
  }

  ViewFirstTicketDetails=()=>
  {
    return this.http.get("http://localhost:8080/viewFirstRowOfSurgeryDetails")
  }

  ViewTicketDetailsOnclickingTicketId=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewTicketDetails",dataToSend)
  }

  ShowGeneralInfoAboutHospital=()=>
  {
    this.nameOfHospital=localStorage.getItem('hospitalName')
    console.log(this.nameOfHospital)
    return this.http.get("http://localhost:8080/viewHospitalDetails/$\{\{this.nameOfHospital\}\}")
  }

  ViewAllOtherTickets=()=>
  {
    this.ticketClicked=localStorage.getItem("ticketIdClicked")
    console.log(this.ticketClicked)
    return this.http.get("http://localhost:8080/viewOtherTickets?ticketId=this.ticketClicked")
  }
}
