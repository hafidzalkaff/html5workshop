import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { HttpParams } from "@angular/common/http";

export interface Giphy{
    title : string;
    imageURL : string;
}

@Injectable()
export class GiphyService {
//Inject HTTPClient
    readonly API_KEY = "";

    constructor(private http: HttpClient){
    }

    search(searchTerm:string, limit = 10, offset = 0) : Promise<Giphy[]>{
        const params = new HttpParams()
            .set('api_key',this.API_KEY)
            .set('q', searchTerm)
            .set('limit', limit + '')
            .set('offset', offset + '')

        return(
            this.http.get<Giphy[]>('https://api.giphy.com/v1/gifs/search', { params : params } )
            .toPromise()
            .then((result: any) => {
                const g: Giphy[] = [];
                const data = result.data;
                for(let d of data){
                    g.push({
                        title: d.title,
                        imageURL : d.images.fixed_width.url
                    })
                }
                return(g);
            })
        )
        
    }



}