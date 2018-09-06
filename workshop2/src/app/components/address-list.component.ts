import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input()
  addresses: Address[] = [];
    
  constructor() { }

  ngOnInit() {
  }

}
