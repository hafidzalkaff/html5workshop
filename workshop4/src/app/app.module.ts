import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PeopleListComponent } from './components/people-list.component';
import { AppRoutesModule } from './/app-routes.module';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { StarWarsService } from './starwars.service';
import { AddPeopleComponent } from './components/add-people.component';
import { ShowPeopleComponent } from './components/show-people.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPeopleComponent,
    ShowPeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutesModule
  ],
  providers: [StarWarsDatabaseService, StarWarsService], // Add Services
  bootstrap: [AppComponent]
})
export class AppModule { }
