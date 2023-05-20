import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { ViewAllTicketsComponent } from './view-all-tickets/view-all-tickets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketInfoCardComponent } from './ticket-info-card/ticket-info-card.component';
import { OrderDetailsPageComponent } from './order-details-page/order-details-page.component';

const myRoute:Routes=[
  {
    path:"",
    component:ViewAllTicketsComponent
  },
  {
    path:"orderPage",
    component:OrderDetailsPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewAllTicketsComponent,
    NavbarComponent,
    TicketInfoCardComponent,
    OrderDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
