import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StarWarsService, StarWarsDatabaseService], //Add Service Here
  bootstrap: [AppComponent]
})
export class AppModule { }
