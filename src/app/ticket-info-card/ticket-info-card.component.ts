import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ticket-info-card',
  templateUrl: './ticket-info-card.component.html',
  styleUrls: ['./ticket-info-card.component.css']
})
export class TicketInfoCardComponent {

  constructor(private api:ApiService)
  {
    this.api.ViewFirstTicketDetails().subscribe(

      (response)=>
      {
        this.firstTicket=response
      }
    )
  }

  firstTicket:any=[]

}
