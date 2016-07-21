import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'; // get everything from Rx
// import 'rxjs/add/operators/map'; // just get map

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService  {
    constructor(private _http: Http) {}

    getCustomers() {  
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json());        
    }
}