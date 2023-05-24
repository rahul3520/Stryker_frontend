import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent {

  nameOfHospital=""
  customer:any=[]

  constructor(private api:ApiService)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response1:any)=>
      {
        this.tickets=response1
      }

    )
    
    let data:any={"ticketId":localStorage.getItem("ticketIdClicked")}

    console.log(data)

    this.api.ViewTicketDetailsOnclickingTicketId(data).subscribe(

      (response:any)=>
      {
        this.ticketClicked=response
        console.log(response)

        this.nameOfHospital=this.ticketClicked[0].hospitalName
        console.log(this.nameOfHospital)
        localStorage.setItem("hospitalName",this.nameOfHospital)
        console.log(localStorage.getItem("hospitalName"))


      }
    )

    
  }

  ViewHospitalDetails=()=>
  {
    this.api.ShowGeneralInfoAboutHospital().subscribe(
      (response2:any)=>
      {
        this.customer=response2
        console.log("hospital info")
        console.log(this.customer)
        
        localStorage.setItem("DetailsOfHospital",this.customer)

        console.log("customer details set in local storage")
        console.log(localStorage.getItem("DetailsOfHospital"))
  
  
      }
    )

    this.api.ViewAllOtherTickets().subscribe(

      (response3:any)=>
      {
        console.log(response3)

        this.otherTickets=response3
      }
    )

    
  }

  ticketClicked:any=[]
  tickets:any=[]
  otherTickets:any=[]
}
