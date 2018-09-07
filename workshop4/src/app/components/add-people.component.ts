import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { People } from '../model';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  people: People = null;

  constructor(private router: Router, private swdbSvc: StarWarsDatabaseService, private swSvc: StarWarsService, private snackBar : MatSnackBar ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/']);
  }

  @ViewChild('form')
  form: NgForm;

  save(){
    console.log('Save with ID: ', this.form.value.peopleId);
    this.people = null;
    
    this.swdbSvc.find(this.form.value.peopleId)
      .then(
        (result) => { //resolve
          console.log('from cache: ', result)
          this.snackBar.open("Record already exists!","Dismiss",{duration: 5000});
          this.router.navigate(['/']);
          
          throw false;
        },
        this.swSvc.searchPeople.bind(this.swSvc) //reject 
      )
      .then(this.swdbSvc.save.bind(this.swdbSvc)) 
      .then((id) => {
        console.log('id:', id);
        this.router.navigate(['/'],{
          queryParams: { message:`Saved Input (${id})` }
        });
      })
      .catch(err => {
        if (!err) {
          return;
        }
        console.error('err: ', err);
        this.router.navigate(['/'],{
          queryParams: { message:`Error - (${err})` }
        });
      })
      this.form.resetForm();
      
  }

}
