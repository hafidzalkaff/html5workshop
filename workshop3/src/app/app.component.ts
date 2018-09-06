import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'workshop3';
  
  private category = [
    'planets',
    'spaceships',
    'vehicles',
    'people',
    'films',
    'species'
  ]


  constructor(private starwarssvc: StarWarsService, private swdbsvc: StarWarsDatabaseService) { }


  @ViewChild('form')
    form: NgForm;
  
  search(){
    console.log('people id: ', this.form.value.peopleId);
    
    this.swdbsvc.find(this.form.value.peopleId)
      .then(
        (result) => {
          console.log('found it: ', result);
        },
        (err) => {
          console.log('people not found: ',err);
          this.starwarssvc.searchPeople.bind(this.starwarssvc)
        }
      )
      .then(
        this.swdbsvc.save.bind(this.swdbsvc)
      )
      .catch (err => {
        console.error('err: ',err)
      })
      
    
    this.starwarssvc.searchPeople(this.form.value.peopleId)
      //.then(this.swdbsvc.save.bind(this.swdbsvc))          //Can use this provided the function has 1 parameter
      .then(result => {
        console.log('result: ', result);
        this.swdbsvc.save(result);
      })
      .then(err => {
        console.log('err: ', err);
      })
    this.form.resetForm();
  }

}




