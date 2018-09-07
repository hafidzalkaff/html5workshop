import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { People } from './model';

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

  people : People = null;
  constructor(private starwarssvc: StarWarsService, private swdbsvc: StarWarsDatabaseService) { }


  @ViewChild('form')
    form: NgForm;
  
  search(){
    console.log('people id: ', this.form.value.peopleId);
  
    this.people = null;
    
    this.swdbsvc.find(this.form.value.peopleId)
      .then(
        (result:People) => { //resolve
          console.log('found it from cache: ', result);
          this.people = result;
          throw false;
          //return(null);
        },
        (datarejectid) => { //reject
          console.log('not in database: ',datarejectid);
          return (datarejectid);
          this.starwarssvc.searchPeople.bind(this.starwarssvc) 
        }
      )
      .then(
        this.starwarssvc.searchPeople.bind(this.starwarssvc)
      )
        .then((result:People) => {
          console.log('this.people: ', this.people)
          this.people = this.people || result;
          return (result);
        })
        .then(
          this.swdbsvc.save.bind(this.swdbsvc)
        )
      .catch (err => {
        if(err)
          console.error('err: ',err)
      })
          
    /*
    this.starwarssvc.searchPeople(this.form.value.peopleId)
      //.then(this.swdbsvc.save.bind(this.swdbsvc))          //Can use this provided the function has 1 parameter
      
      .then(result => {
        console.log('result: ', result);
        this.swdbsvc.save(result);
      })
      .then(err => {
        console.log('err: ', err);
      })*/
    this.form.resetForm();
  }

  @ViewChild('queryform')
  queryform: NgForm;

  query(){
    console.log('category: ', this.queryform.value.catId);
    console.log('character id: ', this.queryform.value.characId);
  
    this.starwarssvc.getItem(this.queryform.value.catId, this.queryform.value.characId)
    .then((result)=> {console.log('resultgetitem : ', result)})
    .catch((error)=> {console.log('errorgetitem : ',error)})

  }

}




