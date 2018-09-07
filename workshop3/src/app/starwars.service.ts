import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { People } from "./model";

const url= 'https://swapi.co/api/people/';
const urlShort= 'https://swapi.co/api/';
const imageUrl = 'https://starwars-visualguide.com/assets/img/characters/';

@Injectable()
export class StarWarsService{

    constructor(private http: HttpClient){

    }

    searchPeople(id:number): Promise<People>{
        console.log('Search People');
        return(
            this.http.get<People>(url + id)                                         //string concatenation
                .toPromise()                                               
            //this.http.get<People>(`http://swapi.co/api/people/${id}`)             //string interpolation
            //    .toPromise()
                .then (result => {
                    result.id = id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                    return (result);
                })
        );
        
    }

    getItem(category:string, id:number):Promise<any>{
        console.log('category: ', category);
        console.log('id: ', id);
        return(
            this.http.get(urlShort + category + '/' + id)                                         //string concatenation
                .toPromise()                                               
            //this.http.get(`http://swapi.co/api/${category}/${id}`)             //string interpolation
            //    .toPromise()
                .then (result => {
                    //result.id = id;
                    //result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                    return (result);
                })
        );

    }


}