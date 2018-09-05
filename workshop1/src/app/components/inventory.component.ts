import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { LineItem } from '../model';

interface Fruit {
  image : string;
  label : string;

}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  fruitsList: Fruit[] = [
    {image: "assets/fruits/acorn_squash.png", label: "Acorn Squash"},
    {image: "assets/fruits/apple.png", label: "Apple"},
    {image: "assets/fruits/lettuce.png", label: "Lettuce"},
    {image: "assets/fruits/squash.png", label: "Squash"}
  ]

  fruitImage = "";
  selectedFruit = "";

  @Output()
  newLineItem = new EventEmitter<LineItem>();


  constructor() { }

  ngOnInit() {
  }

  displayFruit(event: any){
    console.log('>>', event.target.value);
    this.fruitImage = this.fruitsList[event.target.value].image;
    this.selectedFruit = this.fruitsList[event.target.value].label;
  }

  add(form: NgForm){
      console.log("Form : ", form.value);
      //console.log(this.selectedFruit.length);
      //console.log(form.value.quantity);
    
    if(this.selectedFruit.length <= 0){
      alert("Sorry, no fruits selected.");
    }
    else if(form.value.quantity != "" || form.value.quantity != null){
      if(form.value.quantity > 0){
        //construct the payload
        const LineItem: LineItem = {
          label: this.selectedFruit,
          quantity: form.value.quantity
        };

        //fire the event with the payload
        this.newLineItem.next(LineItem);
      }
      else if(form.value.quantity == 0){
        alert("Sorry, amount for the selected fruit has to be greater than 0.");
      }
      else{
        alert("Sorry, please select a valid amount for the selected fruit.");
      }
      
    }
    else {
      
    }

    form.resetForm();
    this.selectedFruit = "";
    this.fruitImage = "";
    

  }

}
