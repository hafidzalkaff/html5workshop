import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiphyService, Giphy } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'workshop3';

constructor (private giphyService : GiphyService){}

  giphys: Giphy[] = [];

  search(form : NgForm){
    console.log("searchTerm", form);
    this.giphySvc.search(form.value.searchTerm)
    .then((result : Giphy[])=> ){


    }
  }


}
