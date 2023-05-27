import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-view-all-tickets',
  templateUrl: './view-all-tickets.component.html',
  styleUrls: ['./view-all-tickets.component.css']
})
export class ViewAllTicketsComponent implements OnInit {

  constructor(private api:ApiService,private route:Router,private sharedService: SharedService)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response:any)=>
      {
        this.tickets=response
      }
    )
  }

  // public apiData: any=[];

  ngOnInit() {
    this.sharedService.fetchDataFromAPI();
  }

  // ngOnChanges() {
  //   this.sharedService.apiData$.subscribe((data) => {
  //     this.apiData = data;
  //     console.log("api data from shared service")
  //     console.log(this.apiData)
  //   });
  // }



  // GoToOrderDetailsPage=(ticketId:any)=>
  // {
  //   localStorage.setItem("ticketIdClicked",ticketId)
  //   console.log(ticketId)
  //   this.route.navigate(["/orderPage"])
  // }

  tickets:any=[]

}
