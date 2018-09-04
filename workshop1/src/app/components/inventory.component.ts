import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { LineItem } from '@angular/forms';

export interface Fruit {
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
    const LineItem: LineItem = {
      label: this.selectedFruit,
      quantity: form.value.quantity

    };
    this.newLineItem.next(LineItem);

    form.resetForm();
    this.selectedFruit = "";
    this.fruitImage = "";

  }

}
