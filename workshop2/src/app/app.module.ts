import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AddressEntryComponent } from './components/address-entry.component';
import { AddressService } from './address.service';



@NgModule({
  declarations: [
    AppComponent,
    AddressEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AddressService], // Singleton - Single Service
  bootstrap: [AppComponent]
})
export class AppModule { }
