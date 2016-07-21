import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];
    
    constructor(private _customerService: CustomerService) {}

    ngOnInit() {
        this._customerService.getCustomers_RxObservable()
            .subscribe(
                (customers) => this.customers = customers,
                (err) => { console.log(err); }
            );
    }
}