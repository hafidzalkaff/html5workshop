import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { People } from "./model";

const url= 'https://swapi.co/api/people/';
const imageUrl = 'https://starwars-visualguide.com/assets/img/characters/';

@Injectable()
export class StarWarsService{

    constructor(private http: HttpClient){

    }

    searchPeople(id:number): Promise<People>{
        //console.log('id passed in : ',id);
        return(
            //this.http.get<People>(URL + id)                                         //string concatenation
            //    .toPromise()                                               
            this.http.get<People>(`http://swapi.co/api/people/${id}`)             //string interpolation
                .toPromise()
                .then (result => {
                    result.id = id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                    return (result);
                })
        );
        
    }

    getItem(category:string, id:number):Promise<any>{
        return(
            //this.http.get<People>(URL + id)                                         //string concatenation
            //    .toPromise()                                               
            this.http.get<People>(`http://swapi.co/api/people/${id}`)             //string interpolation
                .toPromise()
                .then (result => {
                    result.id = id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                    return (result);
                })
        );

    }


}