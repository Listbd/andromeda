import { Injectable } from '@angular/core'

@Injectable()
export class CustomerService  {
    getCustomers() {  
        return [
            { id: 1, name: 'Alpha'},
            { id: 2, name: 'Bravo'},
            { id: 3, name: 'Charlie'}
        ];        
    }
    constructor() {}
}