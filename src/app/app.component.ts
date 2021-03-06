import { Component } from '@angular/core';
import { AboutComponent} from './about/about.component';
import { CustomersComponent} from './customer/customers.component';

//import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AboutComponent, CustomersComponent],
//  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
// [ ] - property binding
// ( ) - event binding

  title = 'Jumping';
  mycolor = 'pink';
  myname = 'Doug';

  changeBarColor() {
    this.mycolor = this.mycolor === "orange" ? "green" : "orange";
  }

}


