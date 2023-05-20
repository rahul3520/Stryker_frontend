import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css']
})
export class ViewAllTicketsComponent {

  constructor(private api:ApiService,private route:Router)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response:any)=>
      {
        this.tickets=response
      }
    )
  }

  GoToOrderDetailsPage=(ticketId:any)=>
  {
    localStorage.setItem("ticketIdClicked",ticketId)
    console.log(ticketId)
    this.route.navigate(["/orderPage"])
  }

  tickets:any=[]

}
