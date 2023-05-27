import { Component, OnChanges  } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent {

  nameOfHospital=""
  customer:any=""
  
  ticketClicked:any=[]
  tickets:any=[]
  otherTickets:any=[]

  // surgeryName:String=new String();
  // customerType:String=new String();

  showHospitalInfo:boolean=false

  public apiData: any=[];

  // ngOnInit() {
  //   this.sharedService.fetchDataFromAPI();
  // }

  // ngOnChanges() {

  //   this.sharedService.apiData$.subscribe((data) => {
  //     this.apiData = data;
  //     console.log("api data from shared service")
  //     console.log(this.apiData)
  //   });
  // }


  constructor(private api:ApiService,private route:Router,private sharedService: SharedService)
  {
    this.api.ViewAllTicketDetails().subscribe(
      (response1: any) => {
        this.tickets = response1;
        console.log("response in order page for view all tickets");
        console.log(this.tickets);
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

        this.showHospitalInfo=true
     
  
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

}
