import { Component } from '@angular/core';
import {LineItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'workshop1';
  cart: LineItem[] = [];
  processLineItem(lineItem: LineItem){
    this.cart.push(lineItem);
    console.log("cart = ",this.cart)
    
  }

  deleteLineItem(lineItem: LineItem){
    console.log("Delete Item", lineItem);
    this.cart.splice(this.cart.indexOf(lineItem)-1,1);
    console.log("Remaining cart = ",this.cart)
    
  }

}
