import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { AddPeopleComponent } from './components/add-people.component';
import { ShowPeopleComponent } from './components/show-people.component';


const ROUTES:Routes = [
  { path:'', component: PeopleListComponent },
  { path:'people', component: PeopleListComponent },
  { path:'add', component: AddPeopleComponent },
  { path:'show/:pId', component: ShowPeopleComponent },
  //Catch All
  //{ path:'**', component: PeopleListComponent } - old declaration
  { path:'**', redirectTo:'/', pathMatch:'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
  //declarations: []
})
export class AppRoutesModule { }
