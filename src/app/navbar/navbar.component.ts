import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  selectedOption:string=""

  onSelectionChange(option: string) {
    this.selectedOption = option;
  }
}
