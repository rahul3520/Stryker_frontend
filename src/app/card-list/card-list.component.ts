import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  public apiData: any=[];

  ngOnInit() {
    this.sharedService.fetchDataFromAPI();
  }

  // ngOnChanges() {
  //   this.sharedService.apiData$.subscribe((data) => {
  //     this.apiData = data;
  //   });
  // }

  constructor(private api:ApiService,private route:Router,private sharedService: SharedService)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response1:any)=>
      {
        
        this.tickets=response1
        // this.formatDate(response1.date)
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

  // formatDate=(date:any)=> {
  //   var monthNames = [
  //     "Jan", "Feb", "Mar",
  //     "Apr", "May", "Jun", "Jul",
  //     "Aug", "Sep", "Oct",
  //     "Nov", "Dec"
  //   ];
  
  //   var day = date.getDate();
  //   var monthIndex = date.getMonth();
  //   var year = date.getFullYear();
  
  //   this.dateLong= monthNames[monthIndex] + ' ' +day + ' ,' + year;
  //   console.log(this.dateLong)

  //   return this.dateLong
  // }
  
  // dateLong:any=""
}
