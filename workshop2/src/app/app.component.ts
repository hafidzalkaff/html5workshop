import { Component, OnInit } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'workshop2';
  private currentAddress: Address[] = [];
  private tabs = [
    {label: 'A-E', pattern: /^[a-e].*/i}, 
    {label: 'F-J', pattern: /^[f-j].*/i}, 
    {label: 'K-O', pattern: /^[k-o].*/i}, 
    {label: 'P-T', pattern: /^[p-t].*/i},
    {label: 'U-Z', pattern: /^[u-z].*/i}  
  ]
  currentTab = 0;
  
  //private addressService: AddressService;

  //svc is injected into the component
  constructor(private addressSvc: AddressService){
    
  }

  ngOnInit(){
    this.addressSvc.findAddress(this.tabs[0].pattern)
      .then(addr => {
        console.log("initialaddress", addr);
        this.currentAddress = addr;
        if(addr.length){
          return this.currentAddress;
          
        }
        return (null);
      })
      .catch(err => {
        console.log("error", err);
      })
  }

  processAddress(address: Address){
    console.log('address: ', address);
    this.addressSvc.addNewAddress(address)
      .then(result => {
        //TODO: Check if new address is visible

        console.log('Saved: ', result)
      })
      .catch(err => {
        console.error('Err: ', err);
      });
  }

  loadAddress(event: MatTabChangeEvent){
    this.currentTab - event.index;
    const patt = this.tabs[event.index].pattern;
    console.log('event', patt, typeof(patt));

    this.addressSvc.findAddress(patt)
      .then((addr : Address[]) => {
        console.log("findaddress", addr);
        this.currentAddress = addr;
        if(addr.length){
          return this.currentAddress;
        }
        return (null);
        
      })
      .catch(err => {
        console.log("error", err);
      })

  }

}
