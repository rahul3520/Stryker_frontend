import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor(private api:ApiService,private route:Router)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response1:any)=>
      {
        this.tickets=response1
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
