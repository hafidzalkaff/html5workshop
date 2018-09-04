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

}
