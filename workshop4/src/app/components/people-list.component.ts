import { Component, OnInit } from '@angular/core';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:People[] = [];
  
  public tabs = [
    {label: 'A-E', pattern: /^[a-e].*/i}, 
    {label: 'F-J', pattern: /^[f-j].*/i}, 
    {label: 'K-O', pattern: /^[k-o].*/i}, 
    {label: 'P-T', pattern: /^[p-t].*/i},
    {label: 'U-Z', pattern: /^[u-z].*/i}  
  ]
  currentTab = 0;

  constructor(private swdbSvc: StarWarsDatabaseService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar : MatSnackBar ) { }

  ngOnInit() {
    //console.log('Current Tab : ', this.currentTab);
    if(parseInt(this.activatedRoute.snapshot.queryParams.tab) > 0){
      this.currentTab = parseInt(this.activatedRoute.snapshot.queryParams.tab);
    }
    else{
      this.currentTab = 0;
    }
    
    this.swdbSvc.getAll(this.tabs[this.currentTab].pattern)
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
    this.router.navigate(['/add'],{queryParams:{tab: this.currentTab}});
  }

  loadPeople(event: MatTabChangeEvent){
    this.currentTab = event.index;
    //console.log('Current Tab : ', this.currentTab)
    const patt = this.tabs[event.index].pattern;
    //console.log('event', patt, typeof(patt));
    this.reloadPeople(patt);
  }

  reloadPeople(pattInput : RegExp){
    this.swdbSvc.getAll(pattInput)
      .then((pploutput : People[]) => {
        
        this.people = pploutput;
        if(pploutput.length){
          return this.people;
        }
        return (null);
        
      })
      .catch(err => {
        console.log("error", err);
      })
  }


}
