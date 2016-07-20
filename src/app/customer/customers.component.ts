import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  customers = [
    { id: 1, name: 'Alpha'},
    { id: 2, name: 'Bravo'},
    { id: 3, name: 'Charlie'}
  ]



    constructor() {}



    ngOnInit() {}
}