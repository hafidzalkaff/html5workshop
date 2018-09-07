import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { People } from '../model';

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {
  
  canShare = false;
  people : People;

  x: number = 0;
  y: number = 0;
  startX: number = 0;
  startY: number = 0;

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private swdbSvc:StarWarsDatabaseService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.canShare = !!navigator['share'];
    const cid = parseInt(this.activatedRoute.snapshot.params.pId)
    console.log('> pid = ', cid);
    this.swdbSvc.find(cid)
      .then(result => {
        this.people = result
        console.log('result: ', result);
      })
      .catch(err => {
        this.snackBar.open(`Not found ${cid}`, '', {
          duration: 2000
        })
        .afterDismissed().toPromise()
        .then(() => {
          this.router.navigate(['/']);
        })
      });
  }

  share() {
    navigator['share']({
      title: `Star Wars!`,
      text: `Sharing ${this.people.name} with the world!`,
      url: 'https://github.com/hafidzalkaff/html5workshop'
    })
  }

  scrollPage(event:any){
    //console.log('event:', event);

    if(event.type == "panup"){
      console.log('scrollDown');
    }
    else if(event.type == "pandown"){
      console.log('scrollUp');
    }
    window.scroll(0,event.deltaY);
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
