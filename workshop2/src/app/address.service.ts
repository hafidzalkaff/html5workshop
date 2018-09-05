import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { Address } from "./model";


@Injectable()
export class AddressService {
    
    private db: Dexie;

    constructor(){
        //Create the database
        this.db = new Dexie('addrdb');

        //Define schema of object store where email is the primary key (first element)
        this.db.version(1).stores({
            contacts: 'email, name, address, phone'
        });

    }

    addNewAddress(address: Address): Promise<string> {
        return (this.db['contacts'].put(address));
    }

    findAddress(pattern: RegExp): Promise<Address[]>{
        return(
            this.db['contacts']
            .orderBy('name')
            .filter(addr => {
                return (pattern.test(addr.name));
            })
            .toArray()
        );
        
    }

}