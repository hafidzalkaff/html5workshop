import { Component, OnInit } from '@angular/core';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:People[] = [];

  constructor(private swdbSvc: StarWarsDatabaseService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar : MatSnackBar ) { }

  ngOnInit() {
    this.swdbSvc.getAll()
      .then((result)=> {
        this.people = result;
        console.log('People : ', this.people);
      })
      .catch((error)=> {
        console.error('Error : ', error);
      })

    if(this.activatedRoute.snapshot.queryParams.message){
      //this.snackBar.open("Input already available in cache", "Dismiss",{duration:3000})
      this.snackBar.open(this.activatedRoute.snapshot.queryParams.message,"Dismiss",{duration: 5000});
    }
  }

  addPeople(){
    this.router.navigate(['/add']);
  }

}
